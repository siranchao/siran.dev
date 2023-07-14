import * as bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma";

interface RequestBody {
    email: string
    name: string
    password: string
}


export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        //check if user already exists
        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })

        if (user) {
            return new Response(JSON.stringify("User already exists"), {status: 400})
        }

        //create user
        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: await bcrypt.hash(body.password, 10)
            }
        })
        const { password, ...userWithoutPassword } = newUser;

        return new Response(JSON.stringify(userWithoutPassword), {status: 200})

    } catch (err) {
        console.log(err)
        throw new Error("Error when creating user");
    }

}