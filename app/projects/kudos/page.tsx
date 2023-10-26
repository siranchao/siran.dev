import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function Kudos() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="Kudos" />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">Kudos App</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">May 24, 2023</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Kudos is a mobile-first, full-stack web application that allows users to create, send, and share kudos with each other in a casual and interesting way. This application is built using MERN stack plus Next.js and deployed on Vercel.</p>
                <br/>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">URL: <a className="text-blue-500 font-regular hover:underline" href="https://kudos-clone.vercel.app/" target="_blank">https://kudos-clone.vercel.app/</a></p>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/kudos" target="_blank">https://github.com/siranchao/kudos</a></p>
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
                    <a href="https://expressjs.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={35} height={35} />
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo" width={35} height={35} />
                    </a>
                    <a href="https://mui.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-plain.svg" alt="MUI" width={35} height={35} />
                    </a>
                </div>
            </section>

            {/* App image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687581860/asset/projects/kudos1_k9tlaq.jpg" alt="kudos-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687581859/asset/projects/kudos2_fdebjo.jpg" alt="kudos" width={500} height={400} className="rounded-lg shadow-xl"/>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This application is built on MERN stack and primarily use Next.js as production framework. Utilize Next.js to handle server-side rendering, page routing, and SEO optimization e.g. In the API layer, I created a separate server application using Node and express.js. The server is responsible for handling REST API and manage user & application data in MongoDB. <span className="text-blue-500 font-regular hover:underline">(<a href="https://github.com/siranchao/kudos_api" target="_blank">see Kudos API repo</a>)</span></p>
                <br />
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are the tech stacks and tools used in this project:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">Front-end:</span> React, Next.13, Material UI, Jotai, Next-Auth</li>
                    <li><span className="font-semibold pr-2">Back-end:</span> TypeScript, Express.js, Node, MongoDB, Mongoose, JWT</li>
                    <li><span className="font-semibold pr-2">Deployment:</span> Vercel, Cyclic</li>
                </ul>
            </section>

            {/* Background section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">A little background</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This application was inspired by one of the project I&apos;ve done during my coop at Ontario Government. The purpose of the project was to build a light-weight web app to create an online community for OPS(Ontario Public Servant) employees to send and share their kudos. No need to compose formal and tedious emails. The original app was built using MERN and Gatsby.js and currently in production. The new Kuods is a clone with latest Next.js and additional features.</p>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the features:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Support Google OAuth and custom credentials for login</li>
                    <li><span className="font-semibold pr-2">-</span> Anonymous user can view, search and share Kudos</li>
                    <li><span className="font-semibold pr-2">-</span> Kudos and Gif info are specified</li>
                    <li><span className="font-semibold pr-2">-</span> Logged-in user can send, like and collect specific Kudo</li>
                    <li><span className="font-semibold pr-2">-</span> Receiver&apos;s name are auto-completed</li>
                    <li><span className="font-semibold pr-2">-</span> Auto display trending Gifs, also support keyword search</li>
                    <li><span className="font-semibold pr-2">-</span> Users can receive email notifications (only available on OPS version)</li>
                </ul>
            </section>

            {/* Additional info section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Additional info</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">All Gif images used in this app are fetched from <a className="text-blue-500  hover:underline" href="https://support.giphy.com/hc/en-us/articles/360034600411-GIPHY-API" target="_blank">Giphy API</a>, you can learn more on <a className="text-blue-500  hover:underline" href="https://developers.giphy.com/" target="_blank"> Giphy developer documentation</a></p>
                <br />
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Demo Account:</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Email: demo@gmail.com</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">Password: 123demo</p>
            </section>

            <BackToTop />
        </main>
    )
}