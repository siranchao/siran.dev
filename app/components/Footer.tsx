'use client'
import { useState } from "react"
import Link from "next/link"

export default function Footer() {
    const [copied, setCopied] = useState('click to copy')

    const handleCopy = () => {
        navigator.clipboard.
        writeText(`siranchao@gmail.com`)
        .then(() => {
            setCopied(`email copied!`)
        })
        .catch(() => {
            alert("Unable to copy email, please try again")
        })
    }

    return (
        <footer className="mt-16 pb-10 relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-base-100/70 dark:bg-base-100/10 border-t border-base-300/80 dark:border-base-content/10">
            <div className="max-w-[1250px] mx-auto px-6 sm:px-12 md:px-24 lg:px-48 py-10 flex flex-col items-center gap-6">
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-base-content/70">
                    <Link href="/" className="hover:text-base-content transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-base-content transition-colors">Projects</Link>
                    <Link href="/notes" className="hover:text-base-content transition-colors">Notes</Link>
                    <a href="#contact" className="hover:text-base-content transition-colors">About</a>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://www.linkedin.com/in/siran-chao/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-base-content/60"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
                    </a>
                    <a href="https://github.com/siranchao" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-base-content/60"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
                    </a>
                    <span className="tooltip tooltip-top" data-tip={copied}>
                        <button onClick={handleCopy} className="hover:opacity-80 transition-opacity" aria-label="Email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-base-content/60"><path d="M12.5,10.2v3.8H18c-0.7,2.3-2.6,4-5.4,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.5,0,2.9,0.5,3.9,1.5l2.8-2.8C17.5,3,15.1,2,12.5,2 C7,2,2.5,6.5,2.5,12s4.5,10,10,10c8.4,0,10.2-7.9,9.4-11.7L12.5,10.2z"></path></svg>
                        </button>
                    </span>
                </div>

                <p className="text-xs text-base-content/50">
                    Copyright © 2023 - All right reserved by Siran.dev
                </p>
            </div>
        </footer>
    )
}




