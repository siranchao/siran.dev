import prisma from "@/app/lib/prisma"

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/**
 * This api fetch all category names, it's a public API
 * @param req 
 */
export async function GET(req: Request) {
    try {
        const categories = await prisma.category.findMany()
        if (categories) {
            return new Response(JSON.stringify(categories), {status: 200, headers: header})
        } else {
            return new Response(JSON.stringify("No data can be found"), {status: 401, headers: header})
        }

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching category data");
    }
}