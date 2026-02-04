"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { formatShortDate } from "@/app/lib/date";

function selectTheme(index: number) {
  let val: string = "";
  switch (index) {
    case 0:
      val = "info";
      break;
    case 1:
      val = "warning";
      break;
    case 2:
      val = "success";
      break;
    case 3:
      val = "error";
      break;
    default:
      val = "accent";
      break;
  }
  return val;
}

export default function NoteCard({ record }: { record: any }) {
  const router = useRouter();
  const readingTime = useMemo(() => {
    const value = Number(record?.readingTime);
    if (Number.isFinite(value) && value > 0) {
      return Math.round(value);
    }
    return Math.floor(Math.random() * 6) + 5;
  }, [record?.readingTime]);
  const clickCard = () => {
    router.push(`/notes/${record.id}`);
  };

  return (
    <div
      className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/60 dark:bg-slate-900/70"
      onClick={clickCard}
    >
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
        {record.content.iconUrl ? (
          <Image
            src={record.content.iconUrl}
            alt={record.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
              Note
            </div>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-wrap gap-2">
          {record.categories && record.categories.length > 0
            ? record.categories.map(
                (tag: { id: string; name: string }, index: number) =>
                  index < 3 && (
                    <span
                      key={index}
                      className={`badge badge-sm badge-outline rounded-full px-2.5 py-2 text-[11px] font-semibold tracking-wide badge-${selectTheme(
                        index
                      )}`}
                    >
                      {tag.name}
                    </span>
                  )
              )
            : null}
        </div>

        <div className="space-y-1.5">
          <p className="text-base font-semibold text-slate-900 line-clamp-1 dark:text-slate-50">
            {record.title}
          </p>
          <p className="text-sm text-slate-500 line-clamp-2 dark:text-slate-400">
            {record.content.info}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 2.25V3m10.5-.75V3M3 9h18m-18 0v8.25A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V9M3 9V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75V9"
                />
              </svg>
              <span>{formatShortDate(record.createdAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
              <span>{readingTime} mins</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span>{record.favoritedBy?.length ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
