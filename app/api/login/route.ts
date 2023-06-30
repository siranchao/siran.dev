import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";
import { signWithJwt } from "@/app/lib/jwt";

interface RequestBody {
    username: string
    password: string
    remember?: boolean
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
            const option = body.remember ? {expiresIn: "30d"} : {expiresIn: "1d"};
            const accessToken: string = signWithJwt(userWithoutPassword, option);
            
            const res = {
                ...userWithoutPassword,
                accessToken
            }

            return new Response(JSON.stringify(res), {status: 200})
        } else {
            return new Response("Wrong password", {status: 401})
        }

    } catch(err) {
        console.log(err)
        throw new Error("Error when logging user");
    }

}   