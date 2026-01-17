import prisma from "@/app/lib/prisma";

interface RequestBody {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const body: RequestBody = await req.json();
        const name = body.name?.trim();
        const email = body.email?.trim();
        const message = body.message?.trim();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify("Name, email, and message are required"),
                { status: 400 }
            );
        }

        const newMessage = await prisma.comment.create({
            data: {
                name,
                email,
                content: message,
            },
            select: {
                id: true,
                name: true,
                email: true,
                content: true,
                createdAt: true,
            },
        });

        return new Response(JSON.stringify(newMessage), { status: 200 });
    } catch (error) {
        console.log(error);
        throw new Error("Error when sending contact message");
    }
}
