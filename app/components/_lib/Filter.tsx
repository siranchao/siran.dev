'use client';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Square3Stack3DIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid"
import { Tag } from "../lib/types";


export default function Filter({selectTag, selectOrder, tag, order}: {
    selectTag: (tag: string) => void
    selectOrder: (order: string) => void
    tag: string
    order: string
}) {

    const list = useRef<string[]>([]);
    
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}/api/category/getCategory`)
        .then(res => {
            const val: string[] = res.data.map((item: Tag) => item.name)
            list.current = val
        })
    },[])


    return (
        <div className="flex flex-col w-full mt-10 mb-8">
            <div className="flex items-center flex-wrap">
                <div className="flex items-center">
                    <Square3Stack3DIcon className="w-4 h-4 mr-2"/>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mr-4">Category:</span>
                    
                </div>
                <div><button onClick={() => selectTag("all")} className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${tag === "all" && "btn-active"}`}>All</button><span className="text-sm text-gray-400">|</span></div>
                {list.current.map((item: string, index: number) => {
                    if(index === list.current.length - 1) {
                        return <div key={index}><button onClick={() => selectTag(item)} className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${tag === item && "btn-active"}`}>{item}</button></div>
                    }
                    return <div key={index}><button onClick={() => selectTag(item)} className={`btn btn-sm btn-ghost normal-case rounded-md text-gray-600 mx-1 dark:text-gray-400 ${tag === item && "btn-active"}`}>{item}</button><span className="text-sm text-gray-400">|</span></div>
                })}
            </div> 

            <div className="divider my-1"></div> 

            <div className="flex items-center">
                <div className="flex items-center">
                    <ArrowsUpDownIcon className="w-4 h-4 mr-2"/>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mr-4">Sort by:</span>
                </div>

                <div>
                    <button className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${order === "newest" && "btn-active"}`} onClick={() => selectOrder("newest")}>Newest</button><span className="text-sm text-gray-400">|</span>
                </div>

                <div>
                    <button className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${order === "popular" && "btn-active"}`} onClick={() => selectOrder("popular")}>Hotest</button> 
                </div>
            </div>
        </div>
    )
}