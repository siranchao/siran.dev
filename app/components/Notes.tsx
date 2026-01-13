import axios from "axios";
import { PostData } from "../lib/types";
import Link from "next/link";

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

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-base-content">Recent Notes</h2>
        <Link href="/notes" className="text-sm text-blue-600 hover:underline">
          All Notes →
        </Link>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        {list.length > 0 &&
          list.map((post: any, index: number) => {
            const badge = getBadge(post);
            return (
              <Link
                key={index}
                href={`/notes/${post.id}`}
                className="block py-2"
              >
                <div className="flex items-start justify-between gap-6 hover:-translate-x-0.5 transition-transform">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm sm:text-base font-semibold text-base-content line-clamp-1">
                        {post.title}
                      </p>
                      {badge.label && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-base-content/60 line-clamp-1">
                      {post.content.info
                        .split(" ")
                        .slice(0, 15)
                        .join(" ")
                        .concat("...")}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-xs text-base-content/50">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
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
