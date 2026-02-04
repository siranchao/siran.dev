"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tag } from "../../lib/types";

// Debounce hook for search optimization
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface NotesFilterProps {
  // Category filter (optional - not needed for tag pages)
  selectTag?: (tag: string) => void;
  tag?: string;
  showCategoryFilter?: boolean;
  // Custom categories (for favorites page)
  customCategories?: string[];
  // Sort controls
  selectOrder: (order: string) => void;
  order: string;
  // Search controls
  onSearch: (query: string) => void;
  searchValue: string;
  searchPlaceholder?: string;
}

export default function NotesFilter({
  selectTag,
  tag = "all",
  showCategoryFilter = true,
  customCategories,
  selectOrder,
  order,
  onSearch,
  searchValue,
  searchPlaceholder = "Search notes...",
}: NotesFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [localSearch, setLocalSearch] = useState(searchValue);
  const debouncedSearch = useDebounce(localSearch, 300);
  const latestSearchValueRef = useRef(searchValue);

  // Fetch categories from API if not provided
  useEffect(() => {
    if (customCategories) {
      setCategories(customCategories);
      return;
    }

    if (showCategoryFilter) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/category/getCategory`)
        .then((res) => {
          const val: string[] = res.data.map((item: Tag) => item.name);
          setCategories(val);
        });
    }
  }, [showCategoryFilter, customCategories]);

  // Sync local search with parent on mount/change
  useEffect(() => {
    setLocalSearch(searchValue);
  }, [searchValue]);

  // Keep latest search value for debounced comparison
  useEffect(() => {
    latestSearchValueRef.current = searchValue;
  }, [searchValue]);

  // Trigger search callback when debounced value changes
  useEffect(() => {
    if (debouncedSearch !== latestSearchValueRef.current) {
      onSearch(debouncedSearch);
    }
  }, [debouncedSearch, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setLocalSearch("");
    onSearch("");
  };

  // Common button styles
  const getButtonStyles = (isActive: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "border-indigo-500 bg-indigo-500 text-white shadow-sm dark:border-indigo-400 dark:bg-indigo-500"
        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-100"
    }`;

  // Toggle button styles for sort
  const getSortToggleStyles = (isActive: boolean) =>
    `px-4 py-1.5 text-sm font-medium transition-all duration-200 first:rounded-l-full last:rounded-r-full ${
      isActive
        ? "bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100"
        : "bg-white text-slate-500 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
    }`;

  return (
    <div className="space-y-4">
      {/* Category Filter Row */}
      {showCategoryFilter && selectTag && (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Category:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => selectTag("all")}
              className={getButtonStyles(tag === "all")}
            >
              All
            </button>
            {categories.map((item: string, index: number) => (
              <button
                key={index}
                onClick={() => selectTag(item)}
                className={getButtonStyles(tag === item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Sort and Search Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Sort Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Sort by:
          </span>
          <div className="inline-flex overflow-hidden rounded-full border border-slate-200 dark:border-slate-600">
            <button
              className={getSortToggleStyles(order === "newest")}
              onClick={() => selectOrder("newest")}
            >
              Newest
            </button>
            <button
              className={getSortToggleStyles(order === "oldest")}
              onClick={() => selectOrder("oldest")}
            >
              Oldest
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={localSearch}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
            className="w-full rounded-full border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/30"
          />
          {localSearch && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-300"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Legacy Filter component for backwards compatibility
export function LegacyFilter({
  selectTag,
  selectOrder,
  tag,
  order,
}: {
  selectTag: (tag: string) => void;
  selectOrder: (order: string) => void;
  tag: string;
  order: string;
}) {
  return (
    <NotesFilter
      selectTag={selectTag}
      tag={tag}
      selectOrder={selectOrder}
      order={order}
      onSearch={() => {}}
      searchValue=""
    />
  );
}
