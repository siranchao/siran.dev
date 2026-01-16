"use client";
import { useState, useEffect, useRef } from "react";
import NoteCard from "../../components/_section/NoteCard";
import Pagination from "../../components/_lib/Pagination";
import Breadcrumbs from "../../components/_lib/Breadcrumbs";
import axios from "axios";
import { PostData } from "../../lib/types";
import ShowLoading from "../../components/_lib/ShowLoading";
import { useSession } from "next-auth/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { Tag } from "../../lib/types";
import Warning from "../../components/_lib/Warning";
import { useRouter } from "next/navigation";

const perPage: number = 12;
const paginationRange: number = 6;

//convert total pages number to 2D array for pagination
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

//convert total posts to 2D array for display
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

  //control states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tag, setTag] = useState<string>("all");

  //pagination controls
  const posts = useRef<any[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<any[][]>([]);

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < displayedPosts.length) setCurrentPage(currentPage + 1);
  };

  //control filters
  const tags = useRef<string[]>([]);
  const selectTag = (tag: string) => {
    if (tag !== "all") {
      const val: any[] = [];
      posts.current.forEach((post: any) => {
        post.categories.forEach((item: Tag) => {
          if (item.name === tag) {
            val.push(post);
          }
        });
      });
      setDisplayedPosts(convertArray(val));
    } else {
      setDisplayedPosts(convertArray(posts.current));
    }
    setTag(tag);
    setCurrentPage(1);
  };

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
          setDisplayedPosts(convertArray(posts.current));

          //get tags
          const allTags: string[] = [];
          posts.current.forEach((post: any) => {
            post.categories.forEach((item: Tag) => {
              allTags.push(item.name);
            });
          });
          tags.current = Array.from(new Set(allTags));
          setLoading(false);
        });
    }
  }, [session]);

  return (
    <div className="mb-20">
      <Breadcrumbs prevRoute="/" currentRoute="My Favorites" />
      <p className="text-2xl mb-4 font-bold">My Favorites: </p>

      {loading ? (
        <ShowLoading />
      ) : posts.current && posts.current.length > 0 ? (
        <>
          <div className="flex flex-col w-full mt-10 mb-8">
            <div className="flex items-center flex-wrap">
              <div className="flex items-center">
                <Square3Stack3DIcon className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 mr-4">
                  Category:
                </span>
              </div>
              <div>
                <button
                  onClick={() => selectTag("all")}
                  className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${
                    tag === "all" && "btn-active"
                  }`}
                >
                  All
                </button>
                <span className="text-sm text-gray-400">|</span>
              </div>
              {tags.current.map((item: string, index: number) => {
                if (index === tags.current.length - 1) {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => selectTag(item)}
                        className={`btn btn-sm btn-ghost normal-case rounded-md mx-1 text-gray-600 dark:text-gray-400 ${
                          tag === item && "btn-active"
                        }`}
                      >
                        {item}
                      </button>
                    </div>
                  );
                }
                return (
                  <div key={index}>
                    <button
                      onClick={() => selectTag(item)}
                      className={`btn btn-sm btn-ghost normal-case rounded-md text-gray-600 mx-1 dark:text-gray-400 ${
                        tag === item && "btn-active"
                      }`}
                    >
                      {item}
                    </button>
                    <span className="text-sm text-gray-400">|</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 place-items-center mb-14 lg:grid-cols-2">
            {displayedPosts[currentPage - 1].length > 0 &&
              displayedPosts[currentPage - 1].map(
                (post: any, index: number) => (
                  <NoteCard record={post} key={index} />
                )
              )}
          </div>

          {displayedPosts.length > 0 && (
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
