import Image from "next/image"

export default function Intro() {

    return (
        <>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mb-20">
                <div className="col-span-2">
                    <p className="text-4xl mb-8 font-bold tracking-wide">Hey, I&apos;m Siran</p>
                    <p className="text-gray-600">Welcome to my personal site. I&apos;m a full-stack developer and an enthusiastic programmer. Here you can check out my recent projects or find other cool stuff I found interesting. Hope you like it!</p>

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