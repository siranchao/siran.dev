import prisma from "@/app/lib/prisma"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * This api returns recent posts, it's a public API
 * @param req 
 */
export async function GET(req: Request) {

    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 5
        })
        
        if(!posts || posts.length === 0) {
            return new Response(JSON.stringify("No data can be found"), {status: 401, headers: header})
        }

        return new Response(JSON.stringify(posts), {status: 200, headers: header})

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching post metadata");
    }

}