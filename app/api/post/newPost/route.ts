import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"
import { PostData } from "@/app/lib/types"


/**
 * This api create a new post record in database, it's a protected API
 * @param req 
 * @returns 
 */

export async function POST(req: Request) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401})
    }

    try {
        const body: {post: PostData, categories: string[]} = await req.json()

        const val: {name: string}[] = body.categories.map((category) => {
            return { name: category }
        })
  
        const newPost = await prisma.post.create({
            data: {
                title: body.post.title,
                content: JSON.stringify(body.post),
                categories: {
                    create: val
                }
            }
        })

        if(newPost) {
            return new Response(JSON.stringify("successfully created new post"), {status: 200})
        } else {
            return new Response(JSON.stringify("Unable to create new post"), {status: 400})
        }

        
    } catch(error) {
        console.log(error)
        throw new Error("Error when creating new post");
    }

}
