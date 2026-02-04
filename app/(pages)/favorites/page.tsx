"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import NoteCard from "../../components/_section/NoteCard";
import Pagination from "../../components/_lib/Pagination";
import Breadcrumbs from "../../components/_lib/Breadcrumbs";
import axios from "axios";
import { PostData } from "../../lib/types";
import ShowLoading from "../../components/_lib/ShowLoading";
import { useSession } from "next-auth/react";
import { Tag } from "../../lib/types";
import Warning from "../../components/_lib/Warning";
import { useRouter } from "next/navigation";
import NotesFilter from "../../components/_lib/Filter";

const perPage: number = 12;
const paginationRange: number = 6;

// Convert total pages number to 2D array for pagination
function convertToPageArray(totalPages: number) {
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

// Convert total posts to 2D array for display
function convertArray(list: any[]) {
  const displayedList: any[][] = [];
  for (let i = 0; i < list.length; i += perPage) {
    displayedList.push(list.slice(i, i + perPage));
  }
  return displayedList;
}

export default function FavoriteNotes() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/user/login");
    },
  });

  const [loading, setLoading] = useState<boolean>(true);

  // Control states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tag, setTag] = useState<string>("all");
  const [order, setOrder] = useState<string>("newest");
  const [search, setSearch] = useState<string>("");

  // Data storage
  const posts = useRef<any[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<any[][]>([]);
  const tags = useRef<string[]>([]);

  // Pagination handlers
  const selectPage = (page: number) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < displayedPosts.length) setCurrentPage(currentPage + 1);
  };

  // Filter and sort posts
  const filterAndSortPosts = useCallback(
    (
      allPosts: any[],
      selectedTag: string,
      selectedOrder: string,
      searchQuery: string
    ) => {
      let filtered = [...allPosts];

      // Filter by tag
      if (selectedTag !== "all") {
        filtered = filtered.filter((post: any) =>
          post.categories.some((item: Tag) => item.name === selectedTag)
        );
      }

      // Filter by search query (client-side search for favorites)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter((post: any) =>
          post.title.toLowerCase().includes(query)
        );
      }

      // Sort posts
      if (selectedOrder === "newest") {
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (selectedOrder === "oldest") {
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }

      return convertArray(filtered);
    },
    []
  );

  // Filter handlers
  const selectTag = useCallback(
    (newTag: string) => {
      setTag(newTag);
      setCurrentPage(1);
      setDisplayedPosts(
        filterAndSortPosts(posts.current, newTag, order, search)
      );
    },
    [order, search, filterAndSortPosts]
  );

  const selectOrder = useCallback(
    (newOrder: string) => {
      setOrder(newOrder);
      setCurrentPage(1);
      setDisplayedPosts(
        filterAndSortPosts(posts.current, tag, newOrder, search)
      );
    },
    [tag, search, filterAndSortPosts]
  );

  const handleSearch = useCallback(
    (query: string) => {
      setSearch(query);
      setCurrentPage(1);
      setDisplayedPosts(filterAndSortPosts(posts.current, tag, order, query));
    },
    [tag, order, filterAndSortPosts]
  );

  // Fetch favorites on mount
  useEffect(() => {
    if (session) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/api/user/posts/${session?.user?.id}`,
          {
            headers: { Authorization: session?.user?.accessToken as string },
          }
        )
        .then((res) => {
          posts.current = res.data.favoritePosts.map((post: any) => {
            const content: PostData = JSON.parse(post.content);
            return { ...post, content };
          });

          // Get unique tags
          const allTags: string[] = [];
          posts.current.forEach((post: any) => {
            post.categories.forEach((item: Tag) => {
              allTags.push(item.name);
            });
          });
          tags.current = Array.from(new Set(allTags));

          // Initial filter and sort
          setDisplayedPosts(
            filterAndSortPosts(posts.current, tag, order, search)
          );
          setLoading(false);
        });
    }
  }, [session, filterAndSortPosts, tag, order, search]);

  const hasNotes =
    displayedPosts.length > 0 && displayedPosts[currentPage - 1]?.length > 0;

  return (
    <div className="mb-24 space-y-10">
      <Breadcrumbs prevRoute="/" currentRoute="My Favorites" />

      <div className="flex flex-col gap-3">
        <p className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
          My Favorites
        </p>
      </div>

      {loading ? (
        <ShowLoading />
      ) : posts.current && posts.current.length > 0 ? (
        <>
          <NotesFilter
            selectTag={selectTag}
            tag={tag}
            customCategories={tags.current}
            selectOrder={selectOrder}
            order={order}
            onSearch={handleSearch}
            searchValue={search}
            searchPlaceholder="Search favorites..."
          />

          {hasNotes ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {displayedPosts[currentPage - 1].map(
                (post: any, index: number) => (
                  <NoteCard record={post} key={post.id || index} />
                )
              )}
            </div>
          ) : (
            <Warning
              msg={
                search
                  ? `No favorites found for "${search}"`
                  : "No favorites found for this category"
              }
            />
          )}

          {displayedPosts.length > 1 && hasNotes && (
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                displayedPages={convertToPageArray(displayedPosts.length)}
                selectPage={selectPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </div>
          )}
        </>
      ) : (
        <div className="mt-10">
          <Warning msg="Your favorite list is empty, try to add some!" />
        </div>
      )}
    </div>
  );
}
