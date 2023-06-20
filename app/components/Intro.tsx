import Image from "next/image"

export default function Intro() {

    return (
        <>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center ">
                <div className="col-span-2">
                    <p className="text-4xl mb-8 font-bold tracking-wide">Hey, I&apos;m Siran</p>
                    <p className="text-gray-600">Welcome to my personal site. I&apos;m a full-stack developer and an enthusiastic programmer. Here you can check out my recent projects or find other cool stuff I found interesting. Hope you like it!</p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.linkedin.com/in/siran-chao/" target="_blank" className="hover:scale-110 delay-100"><Image
                                src="/icon/linkedin.svg"
                                alt="linkedin"
                                width={25}
                                height={25}
                                className="fill-current"
                            /></a>
                        <a href="https://github.com/siranchao" target="_blank"  className="hover:scale-110 delay-100"><Image
                                src="/icon/github.svg"
                                alt="github"
                                width={25}
                                height={25}
                                className="fill-current"
                            /></a>
                        <a href="mailto:siranchao@gmail.com" target="_blank"  className="hover:scale-110 delay-100"><Image
                                src="/icon/gmail.svg"
                                alt="gmail"
                                width={25}
                                height={25}
                                className="fill-current"
                            /></a>
                    </div>
                </div>

                <div className="">
                    <Image
                        src="/myself.jpg"
                        alt="Myself"
                        width={200}
                        height={200}
                        priority
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </>

    )
}