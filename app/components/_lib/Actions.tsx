'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ShareIcon, StarIcon, ClipboardDocumentCheckIcon, CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import { formatShortDate } from "@/app/lib/date";



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
        writeText(`${process.env.NEXT_PUBLIC_URL as string}notes/${postId}/`)
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
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/user/unlike/${session?.user?.id}`,
            { data: {id: postId} },
            { headers: {"Authorization": session?.user?.accessToken as string} })

            if(res.status === 200 && !res.data.favoritePosts.map((item: {id: string}) => item.id).includes(postId)) {
                setLiked(!liked)
                setMsg("This note has been removed from your favorite list.")
            }
        } else {
            const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/user/like/${session?.user?.id}`,
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
                <form method="dialog" className="modal-box bg-base-100 rounded-xl border border-base-300">
                    <p className="py-4 text-sm text-center flex justify-center items-center">
                        <ClipboardDocumentCheckIcon className="w-7 h-7 mr-3 text-accent"/>
                        <span className="font-semibold text-base-content/70">{msg}</span>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box bg-base-100 rounded-xl border border-base-300">
                    <p className="py-4 text-sm text-center flex justify-center items-center">
                        <CheckCircleIcon className="w-7 h-7 mr-3 text-accent"/>
                        <span className="font-semibold text-base-content/70">{msg}</span>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box bg-base-100 rounded-xl border border-base-300">
                    <p className="py-4 text-sm text-center flex justify-center items-center">
                        <InformationCircleIcon className="w-7 h-7 mr-3 text-info"/>
                        <span className="mr-2 font-semibold text-base-content/70">{msg}</span>
                        <Link href="/user/login" className="text-primary font-semibold hover:underline underline-offset-4">Login now</Link>
                    </p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <section className="mb-16 flex justify-between items-center">
                <p className="text-sm text-base-content/40 font-medium">Last update: {formatShortDate(updatedAt)}</p>

                <div className="flex gap-2 items-center">
                    <button className="btn btn-xs bg-base-200 border border-base-300 text-base-content/60 hover:bg-base-300 normal-case rounded-lg font-semibold" onClick={handleCopy}>
                        <ShareIcon className="w-3.5 h-3.5"/>
                        <span>Share</span>
                    </button>

                    <button className="btn btn-xs bg-base-200 border border-base-300 text-base-content/60 hover:bg-base-300 normal-case rounded-lg font-semibold" onClick={() => {
                        if(session) {
                            handleLikeBtn()
                        } else {
                            setMsg("Please log in to star this note.")
                            // @ts-ignore
                            document.getElementById("my_modal_3")?.showModal()
                        }
                    }}>
                        <StarIcon className="w-3.5 h-3.5 text-primary"/>
                        <span>{liked ? "Unstar" : "Star"}</span>
                    </button>
                </div>
            </section>
        </>

    )
}
