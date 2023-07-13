'use client';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Tag } from "../lib/types";


export default function SelectTag(props: {
    addCategory: (item: Tag) => void,
    clearCategory: () => void
}) {

    //category data
    const [categories, setCategories] = useState<Tag[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Tag>({ id: "", name: "" });
    const [categoryList, setCategoryList] = useState<Tag[]>([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/category/getCategory`)
        .then(res => {
            setCategories(res.data)
        })
    }, [])

    return (
        <>
            <hr/>
            <div className="mt-4">
                <label className="label">Select Categories (allow multiple)</label>
                <select className="select select-bordered w-full max-w-xs mt-2 mr-4 dark:bg-transparent dark:text-gray-300" onChange={(e) => setSelectedCategory(categories.find(item => item.id === e.target.value) as Tag)}>
                    {categories.length > 0 && categories.map((item: Tag, index: number) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </select>

                <button className="btn btn-sm mt-2 btn-info mr-2 normal-case dark:text-gray-300" type="button" onClick={() => {
                    props.addCategory(selectedCategory);
                    if(selectedCategory && !categoryList.find(item => item.id === selectedCategory.id)) {
                         setCategoryList([...categoryList, selectedCategory])
                    }
                }}>Add</button>

                <button className="btn btn-sm mt-2 btn-outline btn-error normal-case dark:text-gray-300" type="button" onClick={() => {
                    props.clearCategory();
                    setCategoryList([]);
                }}>Clear</button>
            </div>

            <div className="flex gap-2 flex-wrap">
                {categoryList.length > 0 && categoryList.map((item: Tag, index: number) => (
                    <div className="badge badge-outline" key={index}>{item.name}</div>
                ))}
            </div>
            <hr/>
        </>

    )

}