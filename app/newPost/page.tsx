'use client';
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { createNewPost } from "../lib/db";
import { useRouter } from "next/navigation";
import { PostData } from "../lib/types";

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


export default async function NewPost() {
    const router = useRouter();
    const { data: session } = useSession()
    const [msg, setMsg] = useState("");

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

        const res = await createNewPost(data, session?.user.accessToken as string);

        if(res.post) {
            setMsg(res.message);
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } else {
            setMsg(res.message);
        }

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    })

    if (!session?.user.isAdmin) {
        return (
            <div >
                <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>Warning: This Page is for admin user only</span>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link href="/"><button className="btn btn-sm btn-outline">Back to Home</button></Link>
                </div>
            </div>
        )
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
                    <textarea className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post description" {...register("info")} required></textarea>
                </div>

                <div>
                    <label className="label">Post Main Text</label>
                    <textarea className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post main text" {...register("mainText")}></textarea>
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

                <div className="flex gap-2 pt-4 justify-end">
                    <button className="btn btn-sm btn-outline" type="submit">Submit</button>
                    <button className="btn btn-sm btn-outline btn-error" type="reset" onClick={() => reset()}>Reset</button>
                </div>    
            </form>

        </main>
    )
}