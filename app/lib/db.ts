import Error from "next/error"
import { PostData, Tag } from "./types"

export async function createNewPost(postData: PostData, categories: Tag[], accessToken: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/newPost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            },
            body: JSON.stringify({
                post: postData,
                categories: categories
            })
        })
        const data = await res.json()

        if(res.status === 200) {
            return {
                message: "Post created successfully",
                post: data
            }
        } else {
            return {
                message: "Unable to create new post, please try again",
                post: null
            }
        }

    } catch(error: any) {
        console.log(error)
        throw new Error(error);
    }
}


export async function createNewCategory(name: string, accessToken: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/category/newCategory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            },
            body: JSON.stringify({
                name: name
            })
        })
        const data = await res.json()
        if(res.status === 200) {
            return {
                message: "Category created successfully",
                category: data
            }
        } else if (res.status === 401) {
            return {
                message: "Category already exists",
                category: null
            }
        }
        else {
            return {
                message: "Unable to create new category, please try again",
                category: null
            }
        }

    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}

