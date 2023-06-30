import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    username: string
    password: string
}

export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        const user = await prisma.user.findFirst({
            where: {
                email: body.username
            }
        })
    
        if (!user) {
            return new Response("User not found", {status: 401})
        }
    
        if (user && (await bcrypt.compare(body.password, user.password))) {
            const { password, ...userWithoutPassword } = user;
            return new Response(JSON.stringify(userWithoutPassword), {status: 200})
        } else {
            return new Response("Wrong password", {status: 401})
        }

    } catch(err) {
        console.log(err)
        throw new Error("Error when logging user");
    }

}   