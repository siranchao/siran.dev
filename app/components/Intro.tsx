import Image from "next/image"
import Link from "next/link"

export default function Intro() {

    return (
        <>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mb-20">
                <div className="col-span-2">
                    <p className="text-4xl mb-8 font-bold tracking-wide">Hey, I&apos;m Siran</p>
                    <p className="text-gray-600 dark:text-gray-400">Welcome to my personal site. Here you can checkout my recent projects and discover more cool stuff. Hope you like it!</p>

                </div>

                <div className="w-52 h-52 overflow-hidden rounded-lg shadow-lg">
                    <a href="https://www.linkedin.com/in/siran-chao/">                    
                    <Image
                        src="/myself.jpg"
                        alt="Myself"
                        width={208}
                        height={208}
                        priority
                        className="cursor-pointer transition-all duration-200 ease-in hover:scale-125"
                    /></a>
                </div>
            </div>
        </>

    )
}