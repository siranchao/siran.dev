import prisma from "@/app/lib/prisma";
import { verifyJwt } from "@/app/lib/jwt";
import { PostData, Tag } from "@/app/lib/types";

const estimateReadingTime = (markdown: string) => {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/[#>*_~-]/g, " ")
    .replace(/\n/g, " ")
    .trim();

  if (!plainText) {
    return 0;
  }

  const words = plainText.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200) * 3);
};

/**
 * This api create a new post record in database, it's a protected API
 * @param req
 * @returns
 */

export async function POST(req: Request) {
  const accessToken = req.headers.get("Authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response("Not authorized request", { status: 401 });
  }

  try {
    const body: { post: PostData; categories: Tag[] } = await req.json();
    const categories = body.categories || [];
    const markdownContent = body.post.markdownContent || "";
    const isMarkdown = Boolean(body.post.isMarkdown);
    const readingTime = isMarkdown
      ? estimateReadingTime(markdownContent)
      : typeof body.post.readingTime === "number" &&
          !Number.isNaN(body.post.readingTime)
        ? Math.max(0, body.post.readingTime)
        : 0;

    const val: { id: string }[] = categories.map((item: Tag) => {
      return { id: item.id };
    });

    const postContent = {
      ...body.post,
      readingTime,
      isMarkdown,
    };

    const newPost = await prisma.post.create({
      data: {
        title: body.post.title,
        content: JSON.stringify(postContent),
        isMarkdown: isMarkdown,
        readingTime: readingTime,
        categories: {
          connect: val,
        },
      },
    });

    if (newPost) {
      return new Response(JSON.stringify("successfully created new post"), {
        status: 200,
      });
    } else {
      return new Response(JSON.stringify("Unable to create new post"), {
        status: 400,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error when creating new post");
  }
}
