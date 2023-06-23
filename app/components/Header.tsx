import Link from "next/link"
import Image from "next/image"
import ThemeBtn from "./ThemeBtn"

export default function Header() {

    return (
        <div className="sticky top-0 navbar bg-transparent backdrop-blur-sm mb-20 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-100 dark:text-gray-800">
                        <li><a>Projects</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Contact Me</a></li>
                        <li><a>Sign in</a></li>
                    </ul>
                </div>
                <Link href="/" className="cursor-pointer p-0">
                    <Image src="/logo.svg" alt="logo" width={120} height={120} />
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Projects</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Contact Me</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                <ThemeBtn /> 
                <div><a className="btn btn-sm btn-outline dark:text-gray-400">sign in</a></div> 
            </div>
        </div>
    )
}