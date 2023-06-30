'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function NewPost() {
    const { data: session } = useSession()
    console.log(session)
    if (!session) {
        redirect('/')
    }


    return (
        <>
            Post new article
        </>
    )
}