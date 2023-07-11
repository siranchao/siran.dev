import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"

/**
 * This api fetch all favorite posts of a user, it's a protected API
 * @param req 
 * @param param1 
 * @returns 
 */
export async function GET(req: Request, {params}: {params: {id: string}}) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401})
    }

    try {
        const likedPosts = await prisma.user.findFirst({
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