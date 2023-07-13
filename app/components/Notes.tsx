import axios from "axios";
import { PostData } from "../lib/types";
import Link from "next/link";

async function getData() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/post/recent`)
  
        if(res.status !== 200) {
            return null
        }
        return res.data

    } catch(error) {
        console.log(error)
    }
}

export default async function Notes() {
    const data = await getData();

    if(!data) {
        return null;
    }

    const list: any[] = data.map((post: any) => {
        const content: PostData = JSON.parse(post.content)
        return {...post, content}
    })

    return (
        <main className="mb-16">
            <p className="text-2xl mb-4 font-bold">Recent Notes</p>
            <div className="flex flex-col gap-2">
                {list.length > 0 && list.map((post: any, index: number) => (
                    <Link key={index} href={`/notes/${post.id}`}>
                         <div className="w-full h-16 py-2 flex items-center justify-between hover:-translate-x-0.5 duration-200 ease-in">
                             <div className="w-3/4">
                                 <p className="text-sm text-gray-800 font-semibold mb-1 line-clamp-1 dark:text-gray-300">{post.title}</p>
                                 <p className="text-sm text-gray-600 font-light line-clamp-1 dark:text-gray-500">{post.content.info.split(" ").slice(0, 15).join(" ").concat("...")}</p>
                             </div>
                             <div className="w-1/4 text-right">
                                 <p className="text-xs text-gray-600 dark:text-gray-500">{new Date(post.createdAt).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
                             </div>
                         </div>
                     </Link>
                ))}
            </div>

            <button className="btn btn-link normal-case mt-4 pl-0 text-gray-600 dark:text-gray-400"><Link href={"/notes"}>All Notes</Link></button>
        </main>
    )
}