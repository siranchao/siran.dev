import prisma from "@/app/lib/prisma"



/**
 * This api fetch all category names, it's a public API
 * @param req 
 */
export async function GET(req: Request) {
    try {
        const categories = await prisma.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        if (categories) {
            return new Response(JSON.stringify(categories), {status: 200})
        } else {
            return new Response(JSON.stringify("No data can be found"), {status: 401})
        }

    } catch(error) {
        console.log(error)
        throw new Error("Error when fetching category data");
    }
}