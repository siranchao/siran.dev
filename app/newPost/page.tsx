'use client';
import { useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { createNewPost, createNewCategory } from "../lib/db";
import { useRouter } from "next/navigation";
import { PostData, Tag } from "../lib/types";
import SelectTag from "../components/SelectTag";
import Warning from "../components/Warning";

const uploadImg = async (img: File, type: string) => {
    const data = new FormData();
    data.append("file", img as File);
    data.append("upload_preset", `${process.env.NEXT_PUBLIC_CLOUD_PRESET}`);
    data.append("cloud_name", `${process.env.NEXT_PUBLIC_CLOUD_NAME}`);
    data.append("folder", `/siran_dev/post_${type}`)
    try{
        const resp = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, data);    
        return resp.data.url;
    } catch(error) {
        console.log(error)
    }
}

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


export default async function NewPost() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/user/login');
        }
})
    const [msg, setMsg] = useState("");

    //category data
    const categoryList = useRef<Tag[]>([]);
    const newCategory = useRef<HTMLInputElement | null>(null);

    const addCategory = (item: Tag) => {
        if(!categoryList.current.find(tag => tag.id === item.id)) {
            categoryList.current = [...categoryList.current, item]
        }
    }
    const clearCategory = () => {
        categoryList.current = []
    }

    //image upload
    const[icon, setIcon] = useState<File>();
    const[primaryImg, setPrimaryImg] = useState<File>();
    const[secondaryImg, setSecondaryImg] = useState<File>();

    //react-hook-form
    const { register, handleSubmit, reset } = useForm<PostData>()
    const onSubmit = handleSubmit(async(data) => {
        data.iconUrl = icon ? await uploadImg(icon, "icon") : "";
        data.primaryImgUrl = primaryImg ? await uploadImg(primaryImg, "img") : "";
        data.secondaryImgUrl = secondaryImg ? await uploadImg(secondaryImg, "img") : "";


        const res = await createNewPost(data, categoryList.current, session?.user.accessToken as string);

        if(res.post) {
            setMsg(res.message);
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } else {
            setMsg(res.message);
        }
        scrollTop();
    })

    const submitCategory = async(e: any) => {
        e.preventDefault();

        if(newCategory.current?.value) {
            const val = newCategory.current?.value as string
            const name = val.trim();
            const res = await createNewCategory(name, session?.user.accessToken as string);
            setMsg(res.message);
            scrollTop(); 
        }
    }


    if (!session?.user.isAdmin) {
        return <Warning msg={"This Page is for admin user only"} />
    }

    return (
        <main className="mb-20">
            <p className="text-2xl mb-4 font-bold tracking-wide">Create a new post</p>

            <form className="flex flex-col gap-4 border border-gray-300 p-8 rounded-lg shadow-lg" onSubmit={onSubmit}>
                {msg && <p className="text-error">{msg}</p>}
                <div>
                    <label className="label">Post Title *</label>
                    <input type="text" placeholder="show as main title" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("title")} required/>
                </div>

                <div>
                    <label className="label">Post Subtitle *</label>
                    <input type="text" placeholder="show as sub-title" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("subtitle")} required/>
                </div>

                <div>
                    <label className="label">Post Info *</label>
                    <textarea rows={5} className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post description" {...register("info")} required></textarea>
                </div>

                <div>
                    <label className="label">Post Main Text</label>
                    <textarea rows={5} className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post main text" {...register("mainText")}></textarea>
                </div>

                <div>
                    <label className="label">Primary Link *</label>
                    <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("primaryLink")} required/>
                    <input type="text" placeholder="url" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("primaryUrl")} required/>
                </div>

                <div>
                    <label className="label">Secondary Link</label>
                    <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("secondaryLink")} />
                    <input type="text" placeholder="url" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("secondaryUrl")} />
                </div>

                <div>
                    <label className="label">Video URL</label>
                    <input type="text" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("videoUrl")} />
                </div>

                <hr/>

                <div>
                    <label className="label">Icon Image</label>
                    <input type="file" id="icon" name="icon" className="file-input file-input-sm file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" onChange={(e: any) => setIcon(e.target.files[0])}/>
                </div>

                <div>
                    <label className="label">Primary Image</label>
                    <input type="file" id="primary" name="primary" className="file-input file-input-sm file-input-accent file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" onChange={(e: any) => setPrimaryImg(e.target.files[0])}/>
                </div>

                <div>
                    <label className="label">Secondary Image</label>
                    <input type="file" id="secondary" name="secondary" className="file-input file-input-sm file-input-info file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" onChange={(e: any) => setSecondaryImg(e.target.files[0])}/>
                </div>

                <SelectTag addCategory={addCategory} clearCategory={clearCategory}/>

                <div className="flex gap-2 pt-4 justify-end">
                    <button className="btn btn-sm btn-outline dark:text-gray-300" type="submit">Submit</button>
                    <button className="btn btn-sm btn-outline btn-error" type="reset" onClick={() => reset()}>Reset</button>
                </div>    
            </form>

            <form className="flex flex-col gap-4 border border-gray-300 p-8 rounded-lg shadow-lg mt-8" onSubmit={submitCategory}>
                <p className="text-lg mb-4 font-bold tracking-wide">Create new category</p>
                <div>
                    <label className="label">Category Name</label>
                    <div className="flex justify-between items-center">
                        <input type="text" className="input input-info input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" ref={newCategory} required/>
                        <button className="btn btn-sm btn-outline dark:text-gray-300" type="submit">Create</button>
                    </div>
                </div>
            </form>

        </main>
    )
}