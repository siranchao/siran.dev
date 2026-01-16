"use client";

import Link from "next/link";

type RelevantPost = {
  id: string;
  title: string;
};

export default function RelevantPosts({ posts }: { posts: RelevantPost[] }) {
  return (
    <ul className="text-sm list-disc pl-4 leading-loose text-gray-600 dark:text-gray-400">
      {posts.map((post, index) => (
        <li key={index} className="hover:font-semibold duration-200 ease-in">
          <Link href={`/notes/${post.id}`} className="line-clamp-1">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

