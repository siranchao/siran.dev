import prisma from "@/app/lib/prisma"
import { NextRequest } from "next/server"

export const dynamic = 'force-dynamic';

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}
/**
 * This api returns a post list based on given tags, and recommends related posts. it's a public API
 * @param req 
 */
export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams
        const tags = searchParams.get("tags")?.split(",")
        
        if(!tags || tags.length === 0) {
            return new Response(null, {status: 400, headers: header})
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

        return new Response(JSON.stringify(posts), {status: 200, headers: header})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching posts data");
    }

}