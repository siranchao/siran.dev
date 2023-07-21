import prisma from "@/app/lib/prisma"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

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
            return new Response(JSON.stringify("No data can be found"), {status: 401, headers: header})
        }

        return new Response(JSON.stringify(post), {status: 200, headers: header})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching post data");
    }
}