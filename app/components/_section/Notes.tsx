import axios from "axios";
import { PostData } from "../../lib/types";
import Link from "next/link";
import { formatShortDate } from "@/app/lib/date";
import { Eye, Clock } from "lucide-react";

async function getData() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/api/post/recent`
    );

    if (res.status !== 200) {
      return null;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Notes() {
  const data = await getData();
  const labelColorMap = new Map<string, string>();
  const COLORS = new Set<string>([
    "bg-amber-500/10 text-amber-700",
    "bg-emerald-500/10 text-emerald-700",
    "bg-violet-500/10 text-violet-700",
    "bg-sky-500/10 text-sky-700",
    "bg-rose-500/10 text-rose-700",
  ]);

  if (!data) {
    return null;
  }

  const list: any[] = data.map((post: any) => {
    const content: PostData = JSON.parse(post.content);
    return { ...post, content };
  });

  const getBadge = (post: any) => {
    // Always use the first category name as the badge label.
    const label: string = post.categories?.[0]?.name ?? "";

    if (!labelColorMap.has(label)) {
      labelColorMap.set(label, COLORS.values().next().value as string);
      COLORS.delete(COLORS.values().next().value as string);
    }

    return {
      label,
      className: labelColorMap.get(label) as string,
    };
  };

  //TODO: generate a random number between 200 to 2000 for views
  const getViews = () => {
    return Math.floor(Math.random() * (2000 - 200 + 1)) + 200;
  };
  //TODO: generate a random number between 5 to 30 for read time
  const getReadTime = () => {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-base-content">Recent Notes</h2>
        <Link href="/notes" className="text-sm text-blue-600 hover:underline">
          All Notes →
        </Link>
      </div>

      <div className="mt-6 flex flex-col gap-6 ">
        {list.length > 0 &&
          list.map((post: any, index: number) => {
            const badge = getBadge(post);
            return (
              <Link key={index} href={`/notes/${post.id}`} className="block">
                <div className="flex items-start justify-between gap-6 hover:-translate-x-0.5 transition-transform pb-6 border-b border-base-300 dark:border-base-content/20">
                  <div className="min-w-0">
                    <div className="mb-3 flex items-center gap-2">
                      <p className="text-sm sm:text-base font-semibold text-base-content line-clamp-1">
                        {post.title}
                      </p>
                      {badge.label && (
                        <span
                          className={`px-2 py-0.5 rounded text-[12px] font-semibold ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <p className="mb-3 text-sm text-base-content/80 line-clamp-1">
                      {post.content.info
                        .split(" ")
                        .slice(0, 15)
                        .join(" ")
                        .concat("...")}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-base-content/60">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{getViews().toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{getReadTime()} mins read</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs text-base-content/60">
                      {formatShortDate(post.createdAt)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
