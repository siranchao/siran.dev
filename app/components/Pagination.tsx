'use client'
import { useState, useEffect } from "react"


export default function Pagination({currentPage, displayedPages, selectPage, nextPage, prevPage}: {
    currentPage: number
    displayedPages: number[][]
    selectPage: (page: number) => void
    nextPage: () => void
    prevPage: () => void
}) {
    
    const [pages, setPages] = useState<number[]>(displayedPages[0]);

    useEffect(() => {
        setPages(displayedPages.find((item: number[]) => item.includes(currentPage)) as number[])
    }, [currentPage, displayedPages])

    return (
        <div className="join dark:bg-gray-200">
            <button className="join-item btn" onClick={() => prevPage()}>«</button>

            {pages.map((page: number, index: number) => {
                return (<button key={index} className={`join-item btn ${page === currentPage && "btn-active"}`} onClick={() => selectPage(page)}>
                    {page}
                    </button>)
            })}

            <button className="join-item btn" onClick={() => nextPage()}>»</button>
        </div>
    )
}

