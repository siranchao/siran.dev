import Card from "../components/Card"
import { Metadata } from "next"
import Pagination from "../components/Pagination"
import Breadcrumbs from "../components/Breadcrumbs"

export const  metadata: Metadata = {
    title: 'Siran.dev | Project Page',
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
        title: 'Kudos App',
        path: 'kudos',
        imgUrl: '/projects/kudos.png',
        tag: ['Project'],
        description: "Create, send, and share kudos with each other in a casual and interesting way!",
        date: 'May 24, 2023'
    },
    {
        title: 'Portable Museum',
        path: 'museum',
        imgUrl: '/projects/museum.png',
        tag: ['Project'],
        description: "An online archive app designed for museum and art lovers!",
        date: 'Feb 13, 2023'
    },
    {
        title: "Siran's Kitchen",
        path: 'kitchen',
        imgUrl: '/projects/kitchen.svg',
        tag: ['Project'],
        description: "A simple web app to record and share your favorite food recipes",
        date: 'Sep 22, 2022'
    },
    {
        title: 'Delegation of Authority Registry',
        path: 'doa',
        imgUrl: '/projects/powerapps.png',
        tag: ['Project', 'Low-code'],
        description: "A low-code application allows users to register and manage their delegation of authority process",
        date: 'Aug 15, 2022'
    },
    {
        title: 'Siran.dev',
        path: 'sirandev',
        imgUrl: '/projects/siran.dev.png',
        tag: ['Project'],
        description: "Welcome to my portfolio website, here you can view my works and find useful resources!",
        date: 'Jun 28, 2023'
    },
    {
        title: 'Application Portfolio Manager (APM)',
        path: 'apm',
        imgUrl: '/projects/powerapps2.png',
        tag: ['Project', 'Low-code'],
        description: "A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database",
        date: 'Jan 5, 2023'
    },
]


export default function Projects() {
    const totalPages: number = 6;
    const currentPage: number = 1;


    return (
        <div className="mb-20">
            <Breadcrumbs prevRoute="/" currentRoute="Projects"/>
            <p className="text-2xl mb-4 font-bold">Project List</p>

            <div className="grid gap-4 grid-cols-1 place-items-center lg:grid-cols-2">
                {projects.map((project: Record, index: number) => (
                    <Card record={project} key={index}/>
                ))}
            </div>
            
            <div className="mt-8 flex justify-center">
                <Pagination totalPages={totalPages} currentPage={currentPage}/>
            </div>

        </div>
    )
}