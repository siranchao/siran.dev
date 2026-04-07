import axios from "axios";
import { PostData } from "../../lib/types";
import Link from "next/link";
import { formatShortDate } from "@/app/lib/date";
import { Eye, Clock } from "lucide-react";

async function getData() {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/api/post/recent`,
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
    "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    "bg-violet-500/10 text-violet-700 dark:text-violet-400",
    "bg-sky-500/10 text-sky-700 dark:text-sky-400",
    "bg-rose-500/10 text-rose-700 dark:text-rose-400",
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
        <Link href="/notes" className="text-sm font-medium text-primary hover:underline underline-offset-4">
          All Notes &rarr;
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-0">
        {list.length > 0 &&
          list.map((post: any, index: number) => {
            const badge = getBadge(post);
            return (
              <Link key={index} href={`/notes/${post.id}`} className="block group">
                <div className="flex items-start justify-between gap-6 py-5 border-b border-base-300/80 group-hover:pl-2 transition-all duration-300">
                  <div className="min-w-0">
                    <div className="mb-2.5 flex items-center gap-3">
                      <p className="text-sm sm:text-base font-semibold text-base-content line-clamp-1 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </p>
                      {badge.label && (
                        <span
                          className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <p className="mb-3 text-sm text-base-content/50 line-clamp-1">
                      {post.content.info
                        .split(" ")
                        .slice(0, 15)
                        .join(" ")
                        .concat("...")}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-base-content/40">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{getViews().toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {post.content.readingTime
                            ? post.content.readingTime
                            : getReadTime()}{" "}
                          mins read
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs text-base-content/40 font-medium">
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
