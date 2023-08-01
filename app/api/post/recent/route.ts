import prisma from "@/app/lib/prisma"

export const dynamic = 'force-dynamic';

/**
 * This api returns recent posts, it's a public API
 * @param req 
 */
export async function GET(req: Request) {

    try {
        const posts = await prisma.post.findMany({
            where: {
                categories: {
                    some: {}
                }
            },
            select: {
                title: true,
                id: true,
                content: true,
                createdAt: true
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 5
        })
        
        if(!posts || posts.length === 0) {
            return new Response(JSON.stringify("No data can be found"), {status: 401})
        }

        return new Response(JSON.stringify(posts), {status: 200})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching post metadata");
    }

}