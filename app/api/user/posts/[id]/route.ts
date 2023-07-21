import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * This api fetch all favorite posts of a user, it's a protected API
 * @param req 
 * @param param1 
 * @returns 
 */
export async function GET(req: Request, {params}: {params: {id: string}}) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401, headers: header})
    }

    try {
        const likedPosts = await prisma.user.findFirst({
            where: {
                id: params.id
            },
            select: {
                favoritePosts: {
                    include: {
                        categories: true,
                        favoritedBy: {
                            select: {
                                id: true
                            }
                        }
                    }
                }
            }
        })

        if(!likedPosts) {
            return new Response(null, {status: 401, headers: header})
        }

        return new Response(JSON.stringify(likedPosts), {status: 200, headers: header})

    } catch (err) {
        console.log(err)
        throw new Error("Error when fetching user's data");
    }

}