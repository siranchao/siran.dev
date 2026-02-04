"use client";
import { useState, useEffect } from "react";

export default function Pagination({
  currentPage,
  displayedPages,
  selectPage,
  nextPage,
  prevPage,
}: {
  currentPage: number;
  displayedPages: number[][];
  selectPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}) {
  const [pages, setPages] = useState<number[]>(displayedPages[0]);

  useEffect(() => {
    setPages(
      displayedPages.find((item: number[]) =>
        item.includes(currentPage)
      ) as number[]
    );
  }, [currentPage, displayedPages]);

  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/80 px-2 py-1 shadow-sm backdrop-blur dark:border-gray-700/60 dark:bg-slate-900/70">
      <button
        className="rounded-full px-3 py-1 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
        onClick={() => prevPage()}
      >
        «
      </button>

      {pages.map((page: number, index: number) => {
        return (
          <button
            key={index}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition ${
              page === currentPage
                ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            }`}
            onClick={() => selectPage(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="rounded-full px-3 py-1 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
        onClick={() => nextPage()}
      >
        »
      </button>
    </div>
  );
}
