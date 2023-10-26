import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function CarHub() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="CarHub" />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">CarHub - Demo</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">Sep 9, 2023</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    CarHub is a simple frontend application demo built with latest React and Next.js. This project simulates a car rental application in real business settings. User can search, filter and browse car information and calculate rental prices based on their selections. The purpose of this app is to showcase the ability to use new Next 13 app router to create a hybrid frontend with both SSR and CSR. 
                </p>
                <br/>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">URL: <a className="text-blue-500 font-regular hover:underline" href="https://auto-lab-gamma.vercel.app/" target="_blank">https://auto-lab-gamma.vercel.app/</a></p>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/auto_lab" target="_blank">https://github.com/siranchao/auto_lab</a></p>
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
                    <a href="https://tailwindcss.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="twcss" width={35} height={35} />
                    </a>
                </div>
            </section>

            {/* App image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1694203442/asset/projects/carHub1_fcuafr.jpg" alt="demo-pic-1" width={500} height={400} className="rounded-lg shadow-xl"/>
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1694203442/asset/projects/carHub2_c9qjwc.jpg" alt="demo-pic-2" width={500} height={400} className="rounded-lg shadow-xl"/>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This is an purely frontend application built on React and Next.js with Tailwind CSS. It is a demo project to showcase the ability to levage modern React + TypeScript and relevant tools to construct a hybrid rendering framework.</p>
                <br />
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are the tech stacks and tools used in this project:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">Framework:</span> React, Next.13, TypeScript, Next-Auth</li>
                    <li><span className="font-semibold pr-2">CSS library:</span> Headless UI</li>
                    <li><span className="font-semibold pr-2">Deployment:</span> Vercel</li>
                </ul>
            </section>

            {/* Background section */}

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the highlights:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Fully mobile responsive</li>
                    <li><span className="font-semibold pr-2">-</span> Custom signIn/signUp modal</li>
                    <li><span className="font-semibold pr-2">-</span> Connected and able to query from massive market data</li>
                    <li><span className="font-semibold pr-2">-</span> User can filter cars by various criteria</li>
                    <li><span className="font-semibold pr-2">-</span> Able to access detailed information and photos</li>
                </ul>
            </section>

            {/* Additional info section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Additional info</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">This app take advantage of the public APIs provided by <a className="text-blue-500  hover:underline" href="https://rapidapi.com/hub" target="_blank">Rapid API</a>, you can discover and connect to thousands of APIs on its website.</p>
                <br />
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">All car images are fetching from API provided by <a className="text-blue-500  hover:underline" href="https://www.imagin.studio/car-image-api" target="_blank">Imagin Studio</a>. This is a paid service which only allow limit number of requests per day and watermarks may be included.</p>
            </section>

            <BackToTop />
        </main>
    )
}