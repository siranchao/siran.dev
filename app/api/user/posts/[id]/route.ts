import prisma from "@/app/lib/prisma"

export async function GET(req: Request, {params}: {params: {id: string}}) {

    try {
        const likedPosts = await prisma.user.findUnique({
            where: {
                id: params.id
            },
            select: {
                favoritePosts: true
            }
        })

        if(!likedPosts) {
            return new Response("No data can be found", {status: 401})
        }

        return new Response(JSON.stringify(likedPosts), {status: 200})

    } catch (err) {
        console.log(err)
        throw new Error("Error when fetching user's data");
    }

}