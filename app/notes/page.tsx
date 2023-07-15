'use client'
import { useState, useEffect, useRef } from "react"
import Card from "../components/Card"
import { Metadata } from "next"
import Pagination from "../components/Pagination"
import Breadcrumbs from "../components/Breadcrumbs"
import axios from "axios"

const perPage: number = 8
const paginationRange: number = 6

export const  metadata: Metadata = {
    title: 'Siran.dev | Notes',
    description: 'This page list all my notes',
}

//convert total pages number to 2D array for display
function convertToArray(totalPages: number) {
    const pages: number[] = new Array(totalPages).fill(0).map((_, i) => i + 1)
    const displayedPages: number[][] = []
    let val: number[] = []
    
    while(pages.length > 0) {
        val.push(pages.shift() as number)
        if(val.length === paginationRange || pages.length === 0) {
            displayedPages.push(val)
            val = []
            val[0] = pages[0] - 1
        }
    }
    return displayedPages
}

export default function Notes() {
    const totalPages = useRef<number>(0)
    
    //control states
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [tag, setTag] = useState<string>("all")
    const [order, setOrder] = useState<string>("newest")
    const [notes, setNotes] = useState<any[]>([])

    //pagination controls
    const displayedPages = useRef<number[][]>([])
    const selectPage = (page: number) => {
        setCurrentPage(page)
    }
    const prevPage = () => {
        if(currentPage > 1) setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        if(currentPage < totalPages.current) setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/post/all/?perPage=${perPage}&page=${currentPage}&tag=${tag}&order=${order}`)
        .then(res => {
            console.log(res.data)
            setNotes(res.data.posts)

            totalPages.current = res.data.totalPages
            displayedPages.current = convertToArray(totalPages.current)
        })
        .catch(error => {
            console.log(error)
        })

    }, [currentPage, tag, order])


    return (
        <div className="mb-20">
            <Breadcrumbs prevRoute="/" currentRoute="Notes"/>
            <p className="text-2xl mb-4 font-bold">Note List</p>

            <div className="grid gap-4 grid-cols-1 place-items-center lg:grid-cols-2">
                {notes.length > 0 && notes.map((post: any, index: number) => (
                    <div key={index}>{post.title}</div>
                ))}
            </div>
            

            { totalPages.current > 0 && 
            <div className="mt-8 flex justify-center">
                <Pagination currentPage={currentPage} displayedPages={displayedPages.current} selectPage={selectPage} nextPage={nextPage} prevPage={prevPage}/>
            </div>}
            

        </div>
    )
}