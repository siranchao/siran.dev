import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function SiranDev() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="Siran.dev" />
                        
            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">Siran.dev</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">July 18, 2023</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Siran.dev is a personal website designed and developed by Siran. The purpose of this project is to build a modern and fully functional portfolio website to show my projects and notes. This web application is using lastest Next 13 version with React + Next App router + Next API, which demonstrated the full-stack capabilities of this trending framework.</p>
                <br/>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">App URL: <a className="text-blue-500 font-regular hover:underline" href="https://www.siran.dev/" target="_blank">https://www.siran.dev/</a></p>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub Repo: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/siran.dev" target="_blank">https://github.com/siranchao/siran.dev</a></p>
                <br/>
                <div className="flex gap-4 flex-wrap">
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width={35} height={35} />
                    </a>
                    <a href="https://reactjs.org/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width={35} height={35} />
                    </a>
                    <a href="https://nextjs.org/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="next" width={35} height={35} />
                    </a>
                    <a href="https://nodejs.org/en" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="node" width={35} height={35} />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="twcss" width={35} height={35} />
                    </a>
                    <a href="https://www.docker.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain-wordmark.svg" alt="docker" width={35} height={35} />
                    </a>
                    <a href="https://www.postgresql.org/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg" alt="pg" width={35} height={35} />
                    </a>
                </div>
            </section>

            {/* App image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1689713255/asset/projects/siran_dev2_pg147f.jpg" alt="demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1689713255/asset/projects/siran_dev1_omczhq.jpg" alt="demo" width={500} height={400} className="rounded-lg shadow-xl"/>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This application is built on lastest Next 13 version with React, Next App router, and Next API. Without using any separate server application, it use Next API&apos;s built-in features to handle REST API. Also the backend side is using Prisma as ORM to handle the interaction with the Postgres database.</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">To minimize the hosting cost, I&apos;ve created a low-tier virtual machine on Google Cloud and deploy a Postgres database server using Docker. In addition, the application itself is hosted on Vercel.</p>
                <br />
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">Front-end:</span> React, TypeScript, Next13, Tailwind, DaisyUI, Next-themes</li>
                    <li><span className="font-semibold pr-2">Back-end:</span> Next API, Next-auth, Cloudinary, Prisma, Postgres, JWT</li>
                    <li><span className="font-semibold pr-2">Deployment:</span> Vercel, Google Cloud, Docker</li>
                </ul>
            </section>

            {/* Background section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">A little background</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">The purpose of build this website is to showcase some of my recent projects during college and work. Also it provides a scaleable and fully functional online platform to allow users to view, collect, and share notes that I have upload. These infomation contains my personal collections and interests all comes from the internet.</p>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the features:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Download resume and access my personal info</li>
                    <li><span className="font-semibold pr-2">-</span> Showcase all my projects and access url & source code</li>
                    <li><span className="font-semibold pr-2">-</span> Support custom credentials for login</li>
                    <li><span className="font-semibold pr-2">-</span> Filter and sort notes by different options</li>
                    <li><span className="font-semibold pr-2">-</span> Day/Night theme</li>
                    <li><span className="font-semibold pr-2">-</span> Star and share any specific note</li>
                    <li><span className="font-semibold pr-2">-</span> Upload new article (admin only)</li>
                </ul>
            </section>

            {/* Additional info section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Additional info</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">All note images used are uploaded/generated by Cloudinary API <a className="text-blue-500  hover:underline" href="https://cloudinary.com/documentation" target="_blank">visit to learn more</a></p>
                <br />
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Demo Account:</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Email: test@gg.com</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Password: 123123</p>
            </section>

            <BackToTop />
        </main>
    )
}