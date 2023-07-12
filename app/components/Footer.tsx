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

    const scrollToTop = () => {
        window.scrollTo({
            top: 260,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="footer footer-center p-10 mt-12 bg-transparent text-base-content rounded dark:text-gray-400">

            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-transparent rounded-box place-items-center">
                    <div className="grid grid-flow-col gap-8 font-semibold">
                        <Link href="/" className="link link-hover">Home</Link>
                        <Link href="/projects" className="link link-hover">Projects</Link> 
                        <Link href="/notes" className="link link-hover">Notes</Link> 
                        <a onClick={scrollToTop} className="link link-hover">About</a> 
                    </div> 
                </div>
                
                <div className="divider dark:before:bg-gray-600 dark:before:bg-opacity-50 dark:after:bg-gray-600 dark:after:bg-opacity-50">Contact Me</div>

                <div className="grid h-20 card bg-transparent rounded-box place-items-center">
                    <div className="flex place-items-center">
                        <span>+1 647-764-1309</span>
                        <span className="px-2 sm:px-4 md:px-8">|</span>
                        <span className="tooltip" data-tip={copied}>
                            <span className="cursor-pointer" onClick={handleCopy}>siranchao@gmail.com</span>
                        </span>
                    </div>

                    <div>
                        <div className="grid grid-flow-col gap-8">
                        {/* linkedin */}
                        <a href="https://www.linkedin.com/in/siran-chao/" target="_blank" className="hover:scale-110 duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg></a> 
                        {/* github */}
                        <a href="https://github.com/siranchao" target="_blank" className="hover:scale-110 duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a> 
                        {/* gmail */}
                        <a href="mailto:siranchao@gmail.com" target="_blank" className="hover:scale-110 duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12.5,10.2v3.8H18c-0.7,2.3-2.6,4-5.4,4c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.5,0,2.9,0.5,3.9,1.5l2.8-2.8C17.5,3,15.1,2,12.5,2
	C7,2,2.5,6.5,2.5,12s4.5,10,10,10c8.4,0,10.2-7.9,9.4-11.7L12.5,10.2z"></path></svg></a>   

                        {/* facebook  */}
                        <a href="#" target="_blank" className="hover:scale-110 duration-200 ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path  d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path></svg></a>
                        </div>
                    </div> 
                </div>
            </div>

            <div>
                <p>Copyright © 2023 - All right reserved by Siran.dev</p>
            </div>
        </footer>
    )
}




