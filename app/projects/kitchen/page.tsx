import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function Kitchen() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="Siran's Kitchen" />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">Siran&apos;s Kitchen</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">Sep 22, 2022</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This web application was designed for record and publish my personal food recipes! Use sample node.js, express, and javaScript(Handlebars) to create a server application in order to implement sever-side rendering. This project is deployed on Cyclic</p>
                <br/>
                {/* <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">URL: <a className="text-blue-500 font-regular hover:underline" href="https://siran-kitchen.cyclic.app/" target="_blank">https://siran-kitchen.cyclic.app/</a></p> */}
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/siran_kitchen" target="_blank">https://github.com/siranchao/siran_kitchen</a></p>
                <br/>
                <div className="flex gap-4 flex-wrap">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={35} height={35} />
                    </a>
                    <a href="https://handlebarsjs.com/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/handlebars/handlebars-original-wordmark.svg" alt="handlebars" width={35} height={35} />
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain-wordmark.svg" alt="html" width={35} height={35} />
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
                    <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">
                        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" width={35} height={35} />
                    </a>
                </div>
            </section>

            {/* App image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687725344/asset/projects/kitchen1_iqkbgx.jpg" alt="kitchen-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687725344/asset/projects/kitchen2_cveqbh.jpg" alt="kitchen-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This application is lightweight server application primarily Node.js and Handlebars. The idea of the project is to create a simple Node server that handles REST API and http requests. Use Handlebars as template engine to render static HTML pages similar to a PHP website. And we use MongoDB to store data.</p>
                <br />
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are the tech stacks and tools used in this project:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">Front-end:</span> HTML, CSS, Handlebars, Bootstrap5, Cloudinary</li>
                    <li><span className="font-semibold pr-2">Back-end:</span> JavaScript, Express.js, Node, MongoDB, Mongoose, JWT</li>
                    <li><span className="font-semibold pr-2">Deployment:</span> Cyclic</li>
                </ul>
            </section>

            {/* Background section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">A little background</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">As a cooking enthusiast, I love to cook and collect interesting recipes from all over the world. This app helps me to keep track of my favorite recipes and develop a online registry so that any interested user can add new recipes. This project is my early learning project, so I use template engine by Handlebars. Although no front-end framework like React is used, Handlebars can still perform well as a static rendering engine.</p>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the features:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Support custom credentials for login</li>
                    <li><span className="font-semibold pr-2">-</span> Randomly select recipes for you</li>
                    <li><span className="font-semibold pr-2">-</span> View recipe details with instructions and video</li>
                    <li><span className="font-semibold pr-2">-</span> Classify recipes by tags/categories</li>  
                    <li><span className="font-semibold pr-2">-</span> Register users can add new recipes and new categories</li>
                </ul>
            </section>

            {/* Additional info section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Additional info</p>
                <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">All recipe images used are uploaded/generated by Cloudinary API <a className="text-blue-500  hover:underline" href="https://cloudinary.com/documentation" target="_blank">visit to learn more</a></p>
            </section>

            <BackToTop />
        </main>
    )
}