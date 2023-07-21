import prisma from "@/app/lib/prisma"

/**
 * This api returns a post by id, it's a public API
 * @param req 
 * @param params 
 */

export async function GET(req: Request, {params}: {params: {id: string}}) {
    
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: params.id
            },
            include: {
                categories: true,
                favoritedBy: {
                    select: {
                        id: true
                    }
                }
            }
        })

        if(!post) {
            return new Response(JSON.stringify("No data can be found"), {status: 401})
        }

        return new Response(JSON.stringify(post), {status: 200})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching post data");
    }
}