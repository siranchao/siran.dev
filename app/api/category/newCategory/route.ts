import prisma from "@/app/lib/prisma"
import { verifyJwt } from "@/app/lib/jwt"


interface RequestBody {
    name: string
}

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * @param req This api create a new category, it's a protected API
 */
export async function POST(req: Request) {
    const accessToken = req.headers.get("Authorization")
    if(!accessToken || !verifyJwt(accessToken)) {
        return new Response("Not authorized request", {status: 401, headers: header})
    }

    try {
        const body: RequestBody = await req.json()

        //check if category already exists
        const category = await prisma.category.findFirst({
            where: {
                name: body.name
            }
        })

        if(category) {
            return new Response(JSON.stringify("Category already exists"), {status: 401, headers: header})
        }

        const newCategory = await prisma.category.create({
            data: {
                name: body.name
            }
        })

        if(newCategory) {
            return new Response(JSON.stringify("successfully created new category"), {status: 200, headers: header})
        } else {
            return new Response(JSON.stringify("Unable to create new category"), {status: 400, headers: header})
        }
        
    } catch(error) {
        console.log(error)
        throw new Error("Error when creating new category");
    }
}