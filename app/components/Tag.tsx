import Link from "next/link"

export default function Tag( props: {
    id: string
    name: string
    color: string
}) {


    return (
        <div className={`badge badge-md badge-outline mb-2 mr-2 badge-${props.color} hover:-translate-y-1 duration-200 ease-in`}>
            <Link href={`/notes/tag/${props.id}`}>
                {props.name}
            </Link>
        </div>
    )
}