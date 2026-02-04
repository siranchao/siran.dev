"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import NoteCard from "@/app/components/_section/NoteCard";
import Pagination from "@/app/components/_lib/Pagination";
import Breadcrumbs from "@/app/components/_lib/Breadcrumbs";
import ShowLoading from "@/app/components/_lib/ShowLoading";
import EmptyState from "@/app/components/_lib/EmptyState";
import NotesFilter from "@/app/components/_lib/Filter";
import axios from "axios";
import { PostData } from "@/app/lib/types";
import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  setCurrentPage,
  setOrder,
  setSearch,
} from "@/features/categoryList/categoryListSlice";
import { useRouter } from "next/navigation";

const perPage: number = 12;
const paginationRange: number = 6;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Convert total pages number to 2D array for display
function convertToArray(totalPages: number) {
  const pages: number[] = new Array(totalPages).fill(0).map((_, i) => i + 1);
  const displayedPages: number[][] = [];
  let val: number[] = [];

  while (pages.length > 0) {
    val.push(pages.shift() as number);
    if (val.length === paginationRange || pages.length === 0) {
      displayedPages.push(val);
      val = [];
      val[0] = pages[0] - 1;
    }
  }
  return displayedPages;
}

export default function TagNotes({ params }: { params: { tag: string } }) {
  const router = useRouter();
  const totalPages = useRef<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // Control states from Redux
  const dispatch = useDispatch();
  const { currentPage, order, search } = useSelector(
    (store: any) => store.categoryList
  );
  const [notes, setNotes] = useState<any[]>([]);
  const displayedPages = useRef<number[][]>([]);

  // Decode the tag parameter
  const decodedTag = decodeURIComponent(params.tag);

  // Pagination handlers
  const selectPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const prevPage = () => {
    if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
  };
  const nextPage = () => {
    if (currentPage < totalPages.current)
      dispatch(setCurrentPage(currentPage + 1));
  };

  // Filter handlers
  const selectOrder = useCallback(
    (newOrder: string) => {
      dispatch(setOrder(newOrder));
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  const handleSearch = useCallback(
    (query: string) => {
      dispatch(setSearch(query));
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  const handleClearFilters = useCallback(() => {
    dispatch(reset());
    scrollToTop();
  }, [dispatch]);

  const handleBackToHome = useCallback(() => {
    dispatch(reset());
    router.push("/");
  }, [dispatch, router]);

  // Fetch notes based on filters and search
  useEffect(() => {
    setLoading(true);

    // Use search API if there's a search query, otherwise use regular API
    const apiUrl = search.trim()
      ? `${process.env.NEXT_PUBLIC_URL}/api/post/search/?q=${encodeURIComponent(
          search
        )}&perPage=${perPage}&page=${currentPage}&tag=${
          params.tag
        }&order=${order}`
      : `${process.env.NEXT_PUBLIC_URL}/api/post/all/?perPage=${perPage}&page=${currentPage}&tag=${params.tag}&order=${order}`;

    axios
      .get(apiUrl)
      .then((res) => {
        const displayedNotes: any[] = res.data.posts.map((post: any) => {
          const content: PostData = JSON.parse(post.content);
          return { ...post, content };
        });
        setNotes(displayedNotes);
        totalPages.current = res.data.totalPages;
        displayedPages.current = convertToArray(totalPages.current);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
      .finally(() => {
        scrollToTop();
      });
  }, [currentPage, order, params.tag, search]);

  return (
    <div className="mb-24 space-y-10">
      <Breadcrumbs prevRoute="/" currentRoute={`${decodedTag} Notes`} />

      <div className="flex flex-col gap-3">
        <p className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
          {decodedTag} Notes
        </p>
      </div>

      <NotesFilter
        showCategoryFilter={false}
        selectOrder={selectOrder}
        order={order}
        onSearch={handleSearch}
        searchValue={search}
        searchPlaceholder={`Search in ${decodedTag}...`}
      />

      {loading ? (
        <ShowLoading />
      ) : notes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((post: any, index: number) => (
            <NoteCard record={post} key={post.id || index} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No notes found"
          description="Try adjusting your filters or search keywords to find what you're looking for."
          primaryAction={{
            label: "Clear all filters",
            onClick: handleClearFilters,
          }}
          secondaryAction={{
            label: "Back to home",
            onClick: handleBackToHome,
          }}
        />
      )}

      {totalPages.current > 0 && !loading && notes.length > 0 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            displayedPages={displayedPages.current}
            selectPage={selectPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      )}
    </div>
  );
}
