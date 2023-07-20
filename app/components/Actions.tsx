'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ShareIcon, StarIcon, ClipboardDocumentCheckIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";



export default function Actions({postId, updatedAt, favoritedBy}: {postId: string, updatedAt: string, favoritedBy: {id: string}[]}) {
    const { data: session } = useSession()
    const [liked, setLiked] = useState<boolean>()
    const [msg, setMsg] = useState<string>("")

    useEffect(() => {
        const list: string[] = favoritedBy.map((item: {id: string}) => item.id)
        setLiked(list.includes(session?.user?.id as string))


    },[favoritedBy, session?.user?.id])

    const handleCopy = () => {
        navigator.clipboard.
        writeText(`${process.env.NEXT_PUBLIC_API as string}notes/${postId}/`)
        .then(() => {
            setMsg(`Page link has been copied to clipboard!`)
            // @ts-ignore
            document.getElementById("my_modal_1")?.showModal()
        })
        .catch(() => {
            alert("Unable to copy URL, please try again")
        })

    }

    const handleLikeBtn = async () => {
        if(liked) {
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_API as string}/api/user/unlike/${session?.user?.id}`, 
            { data: {id: postId} }, 
            { headers: {"Authorization": session?.user?.accessToken as string} })

            if(res.status === 200 && !res.data.favoritePosts.map((item: {id: string}) => item.id).includes(postId)) {
                setLiked(!liked)
                setMsg("This note has been removed from your favorite list.")
            }
        } else {
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_API as string}/api/user/like/${session?.user?.id}`, 
            { data: {id: postId} }, 
            { headers: {"Authorization": session?.user?.accessToken as string} })


            if(res.status === 200 && res.data.favoritePosts.map((item: {id: string}) => item.id).includes(postId)) {
                setLiked(!liked)
                setMsg("This note has been added to your favorite list.")
            }
        }
        // @ts-ignore
        document.getElementById("my_modal_2")?.showModal()
    }

    return (
        <>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box bg-base-200 rounded-md dark:bg-gray-800">
                    <p className="py-4 text-sm text-center flex justify-center items-center">                    
                        <ClipboardDocumentCheckIcon className="w-8 h-8 mr-4" fill="#1dcdbc"/>
                        <span className="font-semibold text-gray-600 dark:text-gray-400">{msg}</span>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box bg-base-200 rounded-md dark:bg-gray-800">
                    <p className="py-4 text-sm text-center flex justify-center items-center">                    
                        <CheckCircleIcon className="w-8 h-8 mr-4" fill="#1dcdbc"/>
                        <span className="font-semibold text-gray-600 dark:text-gray-400">{msg}</span>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box bg-base-200 rounded-md dark:bg-gray-800">
                    <p className="py-4 text-sm text-center flex justify-center items-center">                    
                        <InformationCircleIcon className="w-8 h-8 mr-4" fill="#1dcdbc"/>
                        <span className="mr-2 font-semibold text-gray-600 dark:text-gray-400">{msg}</span>
                        <Link href="/user/login" className="text-blue-500 font-semibold hover:underline">Login now</Link>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
          
            <section className="mb-16 flex justify-between items-center">
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">Last update: {new Date(updatedAt).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>

                <div className="flex gap-2 items-center">
                    <button className="btn btn-xs btn-outline btn-info normal-case" onClick={handleCopy}>
                        <ShareIcon className="w-4 h-4"/>
                        <span>Share</span>
                    </button>

                    <button className="btn btn-xs btn-outline btn-accent normal-case" onClick={() => {
                        if(session) {
                            handleLikeBtn()
                        } else {
                            setMsg("Please log in to star this note.")
                            // @ts-ignore
                            document.getElementById("my_modal_3")?.showModal()
                        }
                    }}>
                        <StarIcon className="w-4 h-4" stroke="#1dcdbc"/>
                        <span>{liked ? "Unstar" : "Star"}</span>
                    </button>
                </div>
            </section>
        </>

    )
}