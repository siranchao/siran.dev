"use client";

import Link from "next/link";

type RelevantPost = {
  id: string;
  title: string;
};

export default function RelevantPosts({ posts }: { posts: RelevantPost[] }) {
  return (
    <ul className="text-sm list-disc pl-4 leading-loose text-base-content/50">
      {posts.map((post, index) => (
        <li
          key={index}
          className="mb-2 hover:text-primary duration-200 ease-out"
        >
          <Link href={`/notes/${post.id}`} className="line-clamp-1">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
