import prisma from "@/app/lib/prisma"
import { count } from "console"
import { NextRequest } from "next/server"

/**
 * This api returns a post list based on query parameters, it's a public API
 * @param req 
 * @param params 
 */

interface queryData {
    perPage: number,
    page: number,
    tag: string,
    order: string
}

export async function GET(req: NextRequest) {
    
    try {
        const searchParams = req.nextUrl.searchParams
        const query: queryData = {
            perPage: Number(searchParams.get("perPage")) || 10,
            page: Number(searchParams.get("page")) || 1,
            tag: searchParams.get("tag") || 'all',
            order: searchParams.get("order") || 'newest'
        }

        const condition: any = {
            skip: (query.page - 1) * query.perPage,
            take: query.perPage,
            include: {
                categories: true,
                favoritedBy: true
            }
        }

        if(query.tag !== 'all') {
            condition.where = {
                categories: {
                    some: {
                        name: query.tag
                    }
                }
            }
        }

        if(query.order === 'newest') {
            condition.orderBy = {
                createdAt: "desc"
            }
        }

        if(query.order === 'oldest') {
            condition.orderBy = {
                createdAt: "asc"
            }
        }

        if(query.order === 'popular') {
            condition.orderBy = {
                favoritedBy: {
                    _count: "desc"
                }
            }
        }

        if(query.order === 'unpopular') {
            condition.orderBy = {
                favoritedBy: {
                    _count: "asc"
                }
            }
        }

        const posts = await prisma.post.findMany(condition)

        if(!posts) {
            return new Response(JSON.stringify("No data can be found"), {status: 401})
        }

        return new Response(JSON.stringify(posts), {status: 200})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching all post data");
    }
}