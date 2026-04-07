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
  selectPage?: (page: number) => void;
  nextPage?: () => void;
  prevPage?: () => void;
}) {
  const [pages, setPages] = useState<number[]>(displayedPages[0]);

  useEffect(() => {
    setPages(
      displayedPages.find((item: number[]) =>
        item.includes(currentPage),
      ) as number[],
    );
  }, [currentPage, displayedPages]);

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-base-300 bg-base-100 px-2 py-1 shadow-sm">
      <button
        className="rounded-full px-3 py-1 text-sm font-medium text-base-content/40 transition-colors hover:text-base-content"
        onClick={() => prevPage?.()}
      >
        &laquo;
      </button>

      {pages.map((page: number, index: number) => {
        return (
          <button
            key={index}
            className={`rounded-full px-3 py-1 text-sm font-semibold transition-all duration-200 ${
              page === currentPage
                ? "bg-base-content text-base-100 shadow-sm"
                : "text-base-content/50 hover:text-base-content"
            }`}
            onClick={() => selectPage?.(page)}
          >
            {page}
          </button>
        );
      })}

      <button
        className="rounded-full px-3 py-1 text-sm font-medium text-base-content/40 transition-colors hover:text-base-content"
        onClick={() => nextPage?.()}
      >
        &raquo;
      </button>
    </div>
  );
}
