import prisma from "@/app/lib/prisma"
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
        let totalPosts: number;
        const condition: any = {
            skip: (query.page - 1) * query.perPage,
            take: query.perPage,
            include: {
                categories: true,
                favoritedBy: {
                    select: {
                        id: true
                    }
                }
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
            totalPosts = await prisma.post.count({
                where: {
                    categories: {
                        some: {
                            name: query.tag
                        }
                    }
                }
            })
        } else {
            totalPosts = await prisma.post.count()
        }

        if(query.order === 'newest') {
            condition.orderBy = {
                createdAt: "desc"
            }
        }

        if(query.order === 'popular') {
            condition.orderBy = {
                favoritedBy: {
                    _count: "desc"
                }
            }
        }

        const posts = await prisma.post.findMany(condition)

        if(!posts) {
            return new Response(JSON.stringify("No data can be found"), {status: 401})
        }
        const totalPages = Math.ceil(totalPosts / query.perPage)

        return new Response(JSON.stringify({posts: posts, totalPages: totalPages}), {status: 200})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching all post data");
    }
}