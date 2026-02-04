import prisma from "@/app/lib/prisma";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Search posts by title with pagination support
 * This is a public API optimized for search queries
 */

interface SearchQuery {
  q: string;
  perPage: number;
  page: number;
  tag: string;
  order: string;
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query: SearchQuery = {
      q: searchParams.get("q") || "",
      perPage: Number(searchParams.get("perPage")) || 12,
      page: Number(searchParams.get("page")) || 1,
      tag: searchParams.get("tag") || "all",
      order: searchParams.get("order") || "newest",
    };

    // If no search query, return empty results
    if (!query.q.trim()) {
      return new Response(
        JSON.stringify({ posts: [], totalPages: 0, totalPosts: 0 }),
        { status: 200 }
      );
    }

    // Build the where clause
    const whereClause: any = {
      title: {
        contains: query.q,
        mode: "insensitive", // Case-insensitive search
      },
    };

    // Add tag filter if specified
    if (query.tag !== "all") {
      whereClause.categories = {
        some: {
          name: query.tag,
        },
      };
    }

    // Count total matching posts
    const totalPosts = await prisma.post.count({
      where: whereClause,
    });

    // Build the order clause
    let orderBy: any = { createdAt: "desc" };
    if (query.order === "oldest") {
      orderBy = { createdAt: "asc" };
    } else if (query.order === "popular") {
      orderBy = { favoritedBy: { _count: "desc" } };
    }

    // Fetch posts with pagination
    const posts = await prisma.post.findMany({
      where: whereClause,
      skip: (query.page - 1) * query.perPage,
      take: query.perPage,
      orderBy,
      include: {
        categories: true,
        favoritedBy: {
          select: {
            id: true,
          },
        },
      },
    });

    const totalPages = Math.ceil(totalPosts / query.perPage);

    return new Response(
      JSON.stringify({
        posts,
        totalPages,
        totalPosts,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Search error:", error);
    return new Response(JSON.stringify({ error: "Search failed" }), {
      status: 500,
    });
  }
}
