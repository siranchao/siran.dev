import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";
import { signWithJwt } from "@/app/lib/jwt";

interface RequestBody {
    email: string
    password: string
    remember?: boolean
}

const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();

        const user = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })
    
        if (!user) {
            return new Response(JSON.stringify("User not found"), {status: 401, headers: header})
        }
    
        if (user && (await bcrypt.compare(body.password, user.password))) {
            const { password, ...userWithoutPassword } = user;
            const option = body.remember ? {expiresIn: "60d"} : {expiresIn: "30d"};
            const accessToken: string = signWithJwt(userWithoutPassword, option);
            
            const res = {
                ...userWithoutPassword,
                accessToken
            }

            return new Response(JSON.stringify(res), {status: 200, headers: header})
        } else {
            return new Response(JSON.stringify("Wrong password"), {status: 401, headers: header})
        }

    } catch(err: any) {
        console.log(err)
        throw new Error(err);
    }

}   