import {
  ProjectCard,
  IProjectCardData,
} from "../../components/_section/Projects";
import { Metadata } from "next";
import Breadcrumbs from "../../components/_lib/Breadcrumbs";
import Pagination from "../../components/_lib/Pagination";

export const metadata: Metadata = {
  title: "Siran.dev | Projects",
  description: "This page list all my projects",
};

const projects: IProjectCardData[] = [
  {
    img: "/project/shopping.jpg",
    title: "Shopee E-Commerce",
    desc: "E-commerce platform with Dashboard & CMS, and simple online store template",
    link: "/projects/shopee",
    gitHub: "https://github.com/siranchao/shopee-admin",
    site: "https://www.youtube.com/watch?v=stRBZmJWm-8",
    isNew: true,
  },
  {
    img: "/project/ai.jpg",
    title: "Clerk.io - AI Assistant",
    desc: "Modern SaaS platform leveraging LLM and LangChain to build an AI powered document chatbot",
    link: "/projects/clerkio",
    gitHub: "https://github.com/siranchao/clerk.io",
    site: "https://www.youtube.com/watch?v=GENHOcXq1-8",
    isNew: true,
  },
  {
    img: "/project/museum.jpg",
    title: "Portable Museum",
    desc: "An online archive app designed for museum and art lovers!",
    link: "/projects/museum",
    gitHub: "https://github.com/siranchao/my_museum",
    site: "https://my-museum.vercel.app/",
    isNew: false,
  },
  {
    img: "/project/carhub.png",
    title: "CarHub - Demo",
    desc: "A frontend application demo built with latest React and Next.js",
    link: "/projects/carhub",
    gitHub: "https://github.com/siranchao/auto_lab",
    site: "",
    isNew: false,
  },
  {
    img: "/project/apm.jpg",
    title: "Application Portfolio Manager (APM)",
    desc: "A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database",
    link: "/projects/apm",
    gitHub: "https://github.com/siranchao/ops_apm",
    site: "",
    isNew: false,
  },
  {
    img: "/project/doa.jpg",
    title: "Delegation of Authority Registry",
    desc: "A low-code application allows users to register and manage their delegation of authority process",
    link: "/projects/doa",
    gitHub: "https://github.com/siranchao/ops_doa",
    site: "",
    isNew: false,
  },
  {
    img: "/project/kudos.jpg",
    title: "Kudos App",
    desc: "Create, send, and share kudos with each other in a casual and interesting way!",
    link: "/projects/kudos",
    gitHub: "https://github.com/siranchao/kudos",
    site: "",
    isNew: false,
  },
];

export default function Projects() {
  return (
    <div className="mb-20">
      <Breadcrumbs prevRoute="/" currentRoute="Projects" />
      <p className="text-2xl mb-4 font-bold">Project List</p>

      <div className="mt-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {projects.map((record: any, index: number) => (
          <ProjectCard key={index} {...record} />
        ))}
      </div>

      {/* To do: Pagination  */}
      <div className="flex justify-center">
        <Pagination currentPage={1} displayedPages={[[1]]} />
      </div>
    </div>
  );
}
