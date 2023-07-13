import Card from "../components/Card"
import { Metadata } from "next"
import Pagination from "../components/Pagination"
import Breadcrumbs from "../components/Breadcrumbs"

export const  metadata: Metadata = {
    title: 'Siran.dev | Notes',
    description: 'This page list all my notes',
}


export default function Notes() {



    return (
        <div className="mb-20">
            <Breadcrumbs prevRoute="/" currentRoute="Notes"/>
            <p className="text-2xl mb-4 font-bold">Note List</p>

            <div className="grid gap-4 grid-cols-1 place-items-center lg:grid-cols-2">
                <p>Notes grid</p>
            </div>
            
            <div className="mt-8 flex justify-center">
                <p>Pagination</p>
            </div>

        </div>
    )
}