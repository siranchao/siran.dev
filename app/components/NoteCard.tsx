'use client';
import Image from "next/image"
import { useRouter } from "next/navigation"


function selectTheme(index: number) {
    let val: string = "";
    switch (index) {
        case 0:
            val = "info"
            break;
        case 1:
            val = "warning"
            break;
        case 2:
            val = "success"
            break;
         case 3:
            val = "error"
            break;
        default:
            val = "accent"
            break;
    }
    return val;
}


export default function NoteCard({ record }: { record: any }) {
    const router = useRouter()
    const clickCard = () => {
        router.push(`/notes/${record.id}`)
    }



    return (
        <div className="bg-gray-100 rounded-lg shadow-md flex items-center cursor-pointer hover:shadow-2xl hover:-translate-y-1 duration-200 ease-in w-full h-36"
        onClick={clickCard}>
            <div className="w-1/3">
                {record.content.iconUrl && <Image
                    src={record.content.iconUrl}
                    alt="Desc Image"
                    width={75}
                    height={75}
                    className="m-auto rounded-lg"
                />}
            </div>
            <div className="w-2/3 h-full p-2">
                <div className="flex flex-nowrap pt-1">
                    {(record.categories && record.categories.length > 0) ? 
                    record.categories.map(( tag: {id: string, name: string}, index: number) => (
                        index < 3 && <div key={index} className={`badge badge-sm badge-outline mb-2 mr-2 badge-${selectTheme(index)}`}>{tag.name}</div>
                    )) :
                    null}
                </div>

                <p className="text-md font-semibold mb-2 line-clamp-1 dark:text-gray-800">{record.title}</p>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{record.content.info}</p>

                <div className="flex items-center justify-end gap-4">
                    <p className="text-gray-400 text-xs text-right">{new Date(record.createdAt).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</p>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9CA3AF" className="w-3 h-3 mr-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>

                        <span className="text-gray-400 text-xs text-right">{record.favoritedBy.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}