'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"


interface FormData {
    title: string;
    subtitle: string;
    info: string;
    iconUrl?: string;
    primaryImgUrl?: string;
    secondaryImgUrl?: string;
    videoUrl?: string;
    mainText?: string;
    primaryLink: string;
    primaryUrl: string;
    secondaryLink?: string;
    secondaryUrl?: string;
}

export default async function NewPost() {
    const { data: session } = useSession()

    const { register, handleSubmit, reset } = useForm<FormData>()
    const onSubmit = handleSubmit((data) => {
        console.log(data)
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
                <div>
                    <label className="label">Post Title</label>
                    <input type="text" placeholder="show as main title" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("title")} required/>
                </div>

                <div>
                    <label className="label">Post Subtitle</label>
                    <input type="text" placeholder="show as sub-title" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("subtitle")} required/>
                </div>

                <div>
                    <label className="label">Post Info</label>
                    <textarea className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post description" {...register("info")} required></textarea>
                </div>

                <div>
                    <label className="label">Post Main Text</label>
                    <textarea className="textarea textarea-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" placeholder="show as post main text" {...register("mainText")}></textarea>
                </div>

                <div>
                    <label className="label">Primary Link</label>
                    <input type="text" placeholder="link name" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("primaryLink")} required/>
                    <input type="text" placeholder="url" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("primaryUrl")} required/>
                </div>

                <div>
                    <label className="label">Secondary Link</label>
                    <input type="text" placeholder="link name" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("secondaryLink")} />
                    <input type="text" placeholder="url" className="input input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300 m-1" {...register("secondaryUrl")} />
                </div>

                <div>
                    <label className="label">Video URL</label>
                    <input type="text" placeholder="url" className="input input-bordered w-full max-w-lg dark:bg-transparent dark:text-gray-300 dark:border-gray-300" {...register("videoUrl")} />
                </div>

                <hr/>

                <div>
                    <label className="label">Logo Image</label>
                    <input type="file" className="file-input file-input-sm file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" />
                </div>

                <div>
                    <label className="label">Primary Image</label>
                    <input type="file" className="file-input file-input-sm file-input-accent file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" />
                </div>

                <div>
                    <label className="label">Secondary Image</label>
                    <input type="file" className="file-input file-input-sm file-input-info file-input-bordered w-full max-w-xs dark:bg-transparent dark:text-gray-300 dark:border-gray-300" />
                </div>

                <div className="flex gap-2 pt-4 justify-end">
                    <button className="btn btn-sm btn-outline" type="submit">Submit</button>
                    <button className="btn btn-sm btn-outline btn-error" type="reset" onClick={() => reset()}>Reset</button>
                </div>
            </form>
        </main>
    )
}