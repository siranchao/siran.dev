import Image from "next/image"
import Link from "next/link"

const data = [
    {
        img: "/projects/shopee.png",
        title: "Shopee E-Commerce",
        desc: "E-commerce platform with Dashboard & CMS, and simple online store template",
        link: "/projects/shopee",
        gitHub: "https://github.com/siranchao/shopee-admin",
        site: "https://www.youtube.com/watch?v=stRBZmJWm-8",
        new: true
    },
    {
        img: "/projects/robot.png",
        title: "Clerk.io - AI Assistant",
        desc: "Modern SaaS platform leveraging LLM and LangChain to build an AI powered document chatbot",
        link: "/projects/clerkio",
        gitHub: "https://github.com/siranchao/clerk.io",
        site: "https://www.youtube.com/watch?v=GENHOcXq1-8",
        new: true
    },
    {
        img: "/projects/museum.png",
        title: "Portable Museum",
        desc: "An online archive app designed for museum and art lovers!",
        link: "/projects/museum",
        gitHub: "https://github.com/siranchao/my_museum",
        site: "https://my-museum.vercel.app/",
        new: false
    },
    {
        img: "/projects/powerapps2.png",
        title: "Application Portfolio Manager",
        desc: "A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database",
        link: "/projects/apm",
        gitHub: "https://github.com/siranchao/ops_apm",
        site: "https://youtu.be/ZTjdyVZpngI?si=rSJnLjDVIUAzpF-v",
        new: false
    },

    {
        img: "/projects/kudos.png",
        title: "Kudos",
        desc: "Create, send, and share kudos with each other in a casual and interesting way!",
        link: "/projects/kudos",
        gitHub: "https://github.com/siranchao/kudos",
        //site: "https://kudos-clone.vercel.app/",
        new: false
    },
    {
        img: "/projects/carhub.png",
        title: "CarHub - Demo",
        desc: "A simple frontend application demo built with latest React and Next.js",
        link: "/projects/carhub",
        gitHub: "https://github.com/siranchao/auto_lab",
        //site: "https://auto-lab-gamma.vercel.app/",
        new: false
    },
]


export default function Projects() {

    return (
        <div className="mb-20">
          <p className="text-2xl mb-4 font-bold">My Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
            {/* Card */}
            {data.map((record: any, index: number) => (
                        <div key={index} className="group card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100 dark:bg-gray-200">
                            {record.new && (
                                <Image 
                                    src='/utils/new2.webp' 
                                    alt='new' 
                                    width={35} 
                                    height={35} 
                                    className='absolute top-1 left-1'
                                />
                            )}

                            {/* add project logo here */}
                            <Image
                                src={record.img}
                                alt="image"
                                width={50}
                                height={50}
                                className="m-auto pt-8 pb-4"
                            />
                            <div className="card-body">
                                {/* add project name and description here */}
                                <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">{record.title}</h3>
                                <p className="text-gray-600 line-clamp-3">{record.desc}</p>
                                {/* add page route for this project */}
                                <div className="card-actions mt-2 flex justify-between items-center">
                                    <Link href={record.link} className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus duration-200 ease-in group-hover:underline">Read More</Link>
                                    
                                    {/* add github link and app link */}
                                    <div className="flex gap-4 items-center">
                                        <div className="tooltip" data-tip="source code" >
                                            <a href={record.gitHub} target="_blank">
                                                <Image
                                                    src="/icon/github.svg"
                                                    alt="github"
                                                    width={25}
                                                    height={25}
                                                    className="fill-current"/>
                                            </a>
                                        </div>
            
                                        <div className="tooltip" data-tip="visit site" >
                                            <a href={record.site} target="_blank">
                                                <Image
                                                    src="/dev/url.svg"
                                                    alt="url"
                                                    width={25}
                                                    height={25}
                                                    className="fill-current"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            ))}

          </div>
        
          <button className="btn btn-link normal-case mt-4 pl-0 text-gray-600 dark:text-gray-400"><Link href={"/projects"}>All Projects</Link></button>
        </div>
    )
}