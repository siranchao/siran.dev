import Link from "next/link"

export default function Breadcrumbs({prevRoute, currentRoute}: {prevRoute: string, currentRoute: string}) {

    return (
        <div className="text-sm breadcrumbs mb-4 text-gray-600 dark:text-gray-400">
            <ul>
                <li><Link href="/">Home</Link></li>
                {prevRoute !== '/' && 
                <li><Link href={`/${prevRoute}`}>{prevRoute[0].toUpperCase() + prevRoute.slice(1)}</Link></li>}
                <li>{currentRoute}</li>
            </ul>
        </div>
    )
}