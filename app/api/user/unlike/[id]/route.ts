import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * This api update a user data by remove a favorite post, it's a protected API
 * @param req 
 * @param param1 
 */
export async function PATCH(req: Request, {params}: {params: {id: string}}) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401, headers: header})
    }

    try {
        const postId = await req.json()
        const res = await prisma.user.update({
            where: {
                id: params.id
            },
            data: {
                favoritePosts: {
                    disconnect: {
                        id: postId.data.id
                    }
                }
            },
            select: {
                favoritePosts: {
                    select: {
                        id: true
                    }
                }
            }
        })

        return new Response(JSON.stringify(res), {status: 200, headers: header})

    } catch(error) {
        console.log(error)
        throw new Error("Error when updateing post data");
    }

}