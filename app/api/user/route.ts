import * as bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma";

interface RequestBody {
    email: string
    name?: string
    password: string
}


export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: await bcrypt.hash(body.password, 10)
            }
        })

        const { password, ...userWithoutPassword } = user;

        return new Response(JSON.stringify(userWithoutPassword), {status: 200})

    } catch (err) {
        console.log(err)
        throw new Error("Error when creating user");
    }

}