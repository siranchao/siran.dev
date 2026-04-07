"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ThemeBtn from "../_lib/ThemeBtn";
import { useSession, signOut, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { reset as resetFullList } from "@/features/fullList/fullListSlice";
import { reset as resetCategoryList } from "@/features/categoryList/categoryListSlice";

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetFullList());
    dispatch(resetCategoryList());
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const clickAbout = () => {
    if (pathname === "/") {
      scrollToBottom();
      return;
    }

    router.push("/?scroll=about");
  };

  return (
    <div className="sticky top-0 navbar justify-between bg-base-200/70 backdrop-blur-md mb-20 z-50 border-b border-base-300">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-xl border border-base-300 w-52"
          >
            <li>
              <Link href="/projects" className="font-medium">Projects</Link>
            </li>
            <li>
              <Link href="/notes" className="font-medium">Notes</Link>
            </li>
            <li>
              <a onClick={clickAbout} className="font-medium">About</a>
            </li>
            {session && session.user ? (
              <>
                <li>
                  <Link href="/favorites" className="font-medium">My Favorites</Link>
                </li>
                {session?.user.isAdmin && (
                  <li>
                    <Link href="/newPost" className="font-medium">New Post</Link>
                  </li>
                )}
                <li>
                  <a onClick={() => signOut()} className="font-medium">Sign out</a>
                </li>
              </>
            ) : (
              <li>
                <a onClick={() => signIn()} className="font-medium">Sign in</a>
              </li>
            )}
          </ul>
        </div>
        <Link href="/" className="cursor-pointer p-0" onClick={handleClick}>
          <Image src="/logo.svg" alt="logo" width={120} height={120} />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 justify-end">
            <li>
              <Link href="/projects" className="font-medium text-base-content/70 hover:text-base-content transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/notes" className="font-medium text-base-content/70 hover:text-base-content transition-colors">
                Notes
              </Link>
            </li>
            <li>
              <a onClick={clickAbout} className="font-medium text-base-content/70 hover:text-base-content transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>
        <ThemeBtn />
        {session && session.user ? (
          <div className="dropdown max-md:dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-sm bg-base-content text-base-100 hover:bg-base-content/85 normal-case border-none rounded-lg font-semibold tracking-wide text-xs"
            >
              Account
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu mt-4 p-2 shadow-lg bg-base-100 rounded-xl border border-base-300 w-40"
            >
              <p className="font-semibold text-md py-2 pl-2">
                Hello! {session.user.name}
              </p>
              <hr className="border-base-300" />
              <li>
                <Link href="/favorites">My Favorites</Link>
              </li>
              {session?.user.isAdmin && (
                <li>
                  <Link href="/newPost">New Post</Link>
                </li>
              )}
              <li>
                <a onClick={() => signOut()}>Sign out</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <a
              className="btn btn-sm bg-base-content text-base-100 hover:bg-base-content/85 normal-case border-none rounded-lg font-semibold tracking-wide text-xs"
              onClick={() => signIn()}
            >
              Sign in
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
