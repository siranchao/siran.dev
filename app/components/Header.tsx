'use client';
import Link from "next/link"
import Image from "next/image"
import ThemeBtn from "./ThemeBtn"
import { useSession, signOut, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { reset as resetFullList } from "@/features/fullList/fullListSlice";
import { reset as resetCategoryList } from "@/features/categoryList/categoryListSlice";

export default function Header() {
    const {data: session} = useSession();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(resetFullList());
        dispatch(resetCategoryList());
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="sticky top-0 navbar bg-transparent backdrop-blur-sm mb-20 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-100 dark:text-gray-800">
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/notes">Notes</Link></li>
                        <li><a onClick={scrollToBottom}>Contact Me</a></li>
                        {session && session.user ? 
                            <>
                                <li><Link href="/favorites">My Favorites</Link></li>
                                {session?.user.isAdmin && <li><Link href="/newPost">New Post</Link></li>}
                                <li><a onClick={() => signOut()}>Sign out</a></li>
                            </>
                            :
                            <li><a onClick={() => signIn()}>Sign in</a></li>
                        }
                        
                    </ul>
                </div>
                <Link href="/" className="cursor-pointer p-0" onClick={handleClick}>
                    <Image src="/logo.svg" alt="logo" width={120} height={120} />
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/projects">Projects</Link></li>                   
                    <li><Link href="/notes">Notes</Link></li>
                    <li><a onClick={scrollToBottom}>Contact Me</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                <ThemeBtn /> 
                {session && session.user ? 
                    <div className="dropdown max-md:dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-outline dark:text-gray-400 normal-case">Account</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu mt-4 p-2 shadow bg-base-100 rounded-box w-40 dark:bg-gray-100 dark:text-gray-800 ">
                            <p className="font-semibold text-md py-2 pl-2">Hello! {session.user.name}</p>
                            <hr/>
                            <li><Link href="/favorites">My Favorites</Link></li>
                            {session?.user.isAdmin && <li><Link href="/newPost">New Post</Link></li>}
                            <li><a onClick={() => signOut()}>Sign out</a></li>
                        </ul>
                    </div>
                    :
                    <div><a className="btn btn-sm btn-outline dark:text-gray-400 normal-case" onClick={() => signIn()}>Sign in</a></div> 
                }
                
            </div>
        </div>
    )
}