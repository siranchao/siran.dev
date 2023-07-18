import prisma from "@/app/lib/prisma"
import { NextRequest } from "next/server"

/**
 * This api returns a post list based on req body, and recommends related posts. it's a public API
 * @param req 
 */
export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams
        const tags = searchParams.get("tags")?.split(",")
        
        if(!tags || tags.length === 0) {
            return new Response(null, {status: 400})
        }

        const posts = await prisma.post.findMany({
            where: {
                categories: {
                    some: {
                        name: {
                            in: tags
                        }
                    }
                }
            },
            select: {
                title: true,
                id: true
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 6
        })

        return new Response(JSON.stringify(posts), {status: 200})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching posts data");
    }

}