import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const data = [
  {
    img: "/project/shopping.jpg",
    title: "Shopee E-Commerce",
    desc: "E-commerce platform with Dashboard & CMS, and simple online store template",
    link: "/projects/shopee",
    gitHub: "https://github.com/siranchao/shopee-admin",
    site: "https://www.youtube.com/watch?v=stRBZmJWm-8",
    new: true,
  },
  {
    img: "/project/ai.jpg",
    title: "Clerk.io - AI Assistant",
    desc: "Modern SaaS platform leveraging LLM and LangChain to build an AI powered document chatbot",
    link: "/projects/clerkio",
    gitHub: "https://github.com/siranchao/clerk.io",
    site: "https://www.youtube.com/watch?v=GENHOcXq1-8",
    new: true,
  },
  {
    img: "/project/museum.jpg",
    title: "Portable Museum",
    desc: "An online archive app designed for museum and art lovers!",
    link: "/projects/museum",
    gitHub: "https://github.com/siranchao/my_museum",
    site: "https://my-museum.vercel.app/",
    new: false,
  },
  {
    img: "/projects/carhub.png",
    title: "CarHub - Demo",
    desc: "A frontend application demo built with latest React and Next.js",
    link: "/projects/carhub",
    gitHub: "https://github.com/siranchao/auto_lab",
    //site: "https://auto-lab-gamma.vercel.app/",
    new: false,
  },

  // {
  //   img: "/projects/powerapps2.png",
  //   title: "Application Portfolio Manager",
  //   desc: "A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database",
  //   link: "/projects/apm",
  //   gitHub: "https://github.com/siranchao/ops_apm",
  //   site: "https://youtu.be/ZTjdyVZpngI?si=rSJnLjDVIUAzpF-v",
  //   new: false,
  // },

  // {
  //   img: "/projects/kudos.png",
  //   title: "Kudos",
  //   desc: "Create, send, and share kudos with each other in a casual and interesting way!",
  //   link: "/projects/kudos",
  //   gitHub: "https://github.com/siranchao/kudos",
  //   //site: "https://kudos-clone.vercel.app/",
  //   new: false,
  // },
];

export default function Projects() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-base-content">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="text-sm text-blue-600 hover:underline"
        >
          All Projects →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.slice(0, 3).map((record: any, index: number) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-base-100 shadow-sm hover:shadow-md transition-shadow ring-1 ring-base-300/60"
          >
            <div className="relative w-full aspect-[16/10] bg-base-200">
              {record.new && (
                <span className="absolute top-3 right-3 z-10 px-2 py-1 text-[10px] font-semibold rounded-full bg-red-500 text-white">
                  NEW
                </span>
              )}
              <Image
                src={record.img}
                alt={record.title}
                fill
                className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <p className="font-semibold text-base-content line-clamp-1">
                {record.title}
              </p>
              <p className="mt-2 text-sm text-base-content/60 line-clamp-2">
                {record.desc}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={record.link}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Read More
                </Link>

                <div className="flex gap-1 items-center">
                  <a
                    href={record.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-lg bg-transparent hover:bg-base-300 transition-colors flex items-center justify-center"
                    aria-label="source code"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={record.site}
                    target="_blank"
                    rel="noreferrer"
                    className="h-9 w-9 rounded-lg bg-transparent hover:bg-base-300 transition-colors flex items-center justify-center"
                    aria-label="visit site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
