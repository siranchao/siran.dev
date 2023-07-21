import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"
import { PostData, Tag } from "@/app/lib/types"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * This api create a new post record in database, it's a protected API
 * @param req 
 * @returns 
 */

export async function POST(req: Request) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401, headers: header})
    }

    try {
        const body: {post: PostData, categories: Tag[]} = await req.json()

        const val: {id: string}[] = body.categories.map((item: Tag) => {
            return { id: item.id }
        })
  
        const newPost = await prisma.post.create({
            data: {
                title: body.post.title,
                content: JSON.stringify(body.post),
                categories: {
                    connect: val
                }
            }
        })

        if(newPost) {
            return new Response(JSON.stringify("successfully created new post"), {status: 200, headers: header})
        } else {
            return new Response(JSON.stringify("Unable to create new post"), {status: 400, headers: header})
        }

        
    } catch(error) {
        console.log(error)
        throw new Error("Error when creating new post");
    }

}
