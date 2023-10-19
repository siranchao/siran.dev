import Card from "../components/Card"
import { Metadata } from "next"
import Breadcrumbs from "../components/Breadcrumbs"

export const  metadata: Metadata = {
    title: 'Siran.dev | Projects',
    description: 'This page list all my projects',
}

interface Record {
    title: string
    path: string
    imgUrl?: string
    tag?: string[]
    description: string
    date: string
}

const projects: Record[] = [
    {
        title: 'Shopee E-Commerce',
        path: 'shopee',
        imgUrl: '/projects/shopee.png',
        tag: ['Full-stack', 'React', 'Next.js'],
        description: "E-commerce platform with Dashboard & CMS, and simple online store template.",
        date: 'Oct 8, 2023'
    },
    {
        title: 'CarHub - Demo',
        path: 'carhub',
        imgUrl: '/projects/carhub.png',
        tag: ['Frontend', 'React'],
        description: "A simple frontend application demo built with latest React and Next.js",
        date: 'Sep 9, 2023'
    },
    {
        title: 'Portable Museum',
        path: 'museum',
        imgUrl: '/projects/museum.png',
        tag: ['React', 'Next 12'],
        description: "An online archive app designed for museum and art lovers!",
        date: 'Feb 13, 2023'
    },
    {
        title: 'Application Portfolio Manager (APM)',
        path: 'apm',
        imgUrl: '/projects/powerapps2.png',
        tag: ['OPS', 'PowerApps'],
        description: "A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database",
        date: 'Jan 5, 2023'
    },
    {
        title: 'Kudos App',
        path: 'kudos',
        imgUrl: '/projects/kudos.png',
        tag: ['Full-stack', 'React', 'Next.js'],
        description: "Create, send, and share kudos with each other in a casual and interesting way!",
        date: 'May 24, 2023'
    },
    {
        title: 'Siran.dev',
        path: 'sirandev',
        imgUrl: '/projects/siran.dev.png',
        tag: ['Full-stack', 'React', 'Next.js'],
        description: "Welcome to my portfolio website, here you can view my works and find useful resources!",
        date: 'Jun 28, 2023'
    },
    {
        title: 'Delegation of Authority Registry',
        path: 'doa',
        imgUrl: '/projects/powerapps.png',
        tag: ['OPS', 'PowerApps'],
        description: "A low-code application allows users to register and manage their delegation of authority process",
        date: 'Aug 15, 2022'
    },
    {
        title: "Siran's Kitchen",
        path: 'kitchen',
        imgUrl: '/projects/kitchen.svg',
        tag: ['Vanilla', 'NodeJS'],
        description: "A simple web app to record and share your favorite food recipes",
        date: 'Sep 22, 2022'
    },
]


export default function Projects() {

    return (
        <div className="mb-20">
            <Breadcrumbs prevRoute="/" currentRoute="Projects"/>
            <p className="text-2xl mb-4 font-bold">Project List</p>

            <div className="grid gap-4 grid-cols-1 place-items-center mb-14 lg:grid-cols-2">
                {projects.map((project: Record, index: number) => (
                    <Card record={project} key={index}/>
                ))}
            </div>
            

            {/* To do: Pagination  */}
            <div className="flex justify-center">
                <div className="join dark:bg-gray-200">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn btn-active">1</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>

        </div>
    )
}