'use client';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function SelectTag(props: {
    addCategory: (item: string) => void,
    clearCategory: () => void
}) {

    //category data
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [categoryList, setCategoryList] = useState<string[]>([]);


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/category/getCategory`)
        .then(res => {
            const data: string[] = res.data.map((item: any) => item.name)
            setCategories(data)
        })
    }, [])

    return (
        <>
            <hr/>
            <div className="mt-4">
                <label className="label">Select Categories (allow multiple)</label>
                <select className="select select-bordered w-full max-w-xs mt-2 mr-4 dark:bg-transparent dark:text-gray-300" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categories.length > 0 && categories.map((item: string, index: number) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>

                <button className="btn btn-sm mt-2 btn-info mr-2 normal-case dark:text-gray-300" type="button" onClick={() => {
                    props.addCategory(selectedCategory);
                    if(selectedCategory && !categoryList.includes(selectedCategory)) {
                         setCategoryList([...categoryList, selectedCategory])
                    }
                }}>Add</button>

                <button className="btn btn-sm mt-2 btn-outline btn-error normal-case dark:text-gray-300" type="button" onClick={() => {
                    props.clearCategory();
                    setCategoryList([]);
                }}>Clear</button>
            </div>

            <div className="flex gap-2 flex-wrap">
                {categoryList.length > 0 && categoryList.map((item: string, index: number) => (
                    <div className="badge badge-outline" key={index}>{item}</div>
                ))}
            </div>
            <hr/>
        </>

    )

}