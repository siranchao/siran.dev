import { PostData } from "./types"

export async function createNewPost(postData: PostData, accessToken: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API as string}/api/post/newPost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            },
            body: JSON.stringify(postData)
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

