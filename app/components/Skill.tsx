import Image from "next/image"
import { CodeBracketIcon, ServerStackIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid"

export default function Skill() {

    return (
        <>
            <div className="flex flex-col w-full border-opacity-50 mb-20">
                <div>
                    <p className="text-2xl mb-4 font-bold">About me</p>
                    <p className="text-gray-600 mb-4 dark:text-gray-400">I&apos;m a web developer enthusiastic about full-stack development. I always excited to learn and apply my skills in a professional setting. Connect with me if you interested &#128515;</p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/siran-chao/" target="_blank" className="hover:scale-110 duration-200 ease-in"><Image
                                        src="/icon/linkedin.svg"
                                        alt="linkedin"
                                        width={25}
                                        height={25}
                                        className="fill-current"
                                    /></a>
                                <a href="https://github.com/siranchao" target="_blank"  className="hover:scale-110 duration-200 ease-in"><Image 
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25} 
                                        className="fill-current"
                                    /></a>
                                <a href="mailto:siranchao@gmail.com" target="_blank"  className="hover:scale-110 duration-200 ease-in"><Image
                                        src="/icon/gmail.svg"
                                        alt="gmail"
                                        width={25}
                                        height={25}
                                        className="fill-current"
                                    /></a>
                        </div>

                        <a className="btn btn-ghost btn-sm normal-case dark:text-gray-400" href={`${process.env.NEXT_PUBLIC_RESUME as string}`} target="_blank">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Complete"> <g id="download"> <g> <path className="dark:stroke-current" d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <g> <polyline className="dark:stroke-current" data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line className="dark:stroke-current" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
                            Resume
                        </a>
                    </div>

                </div>
                <div className="divider dark:before:bg-gray-600 dark:before:bg-opacity-50 dark:after:bg-gray-600 dark:after:bg-opacity-50"><span className="text-gray-600 text-sm dark:text-gray-400 ">Stacks and Skills</span></div>

                <div className="flex flex-col items-center gap-4 lg:flex-row">
                    <div className="w-3/4 h-full lg:w-full shadow-md rounded-lg hover:shadow-2xl hover:scale-105 duration-200 ease-in dark:shadow-2xl">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <CodeBracketIcon className="w-6 h-6 text-gray-200 dark:text-gray-400"/>
                            <p className="text-md font-semibold text-gray-200 dark:text-gray-400">Front End</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-500 font-normal">
                            <ul>
                                <li>
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="hover:underline line-clamp-1">JavaScript(ES6)</a>
                                </li>
                                <li>
                                    <a href="https://www.typescriptlang.org/" target="_blank" className="hover:underline line-clamp-1">TypeScript</a>
                                </li>  
                                <li>
                                    <a href="https://nextjs.org/" target="_blank" className="hover:underline line-clamp-1">React + Next.js</a>
                                </li>
                                <li>
                                    <a href="https://redux.js.org/" target="_blank" className="hover:underline line-clamp-1">Zustand / Jotai / Redux</a>
                                </li>    
                                <li>
                                    <a href="https://tailwindcss.com/" target="_blank" className="hover:underline line-clamp-1">CSS / Sass / Tailwind</a>
                                </li>
                                <li>
                                    <a href="https://vitejs.dev/" target="_blank" className="hover:underline line-clamp-1">Webpack / Vite</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-3/4 h-full lg:w-full shadow-md rounded-lg hover:shadow-2xl hover:scale-105 duration-200 ease-in dark:shadow-2xl">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <ServerStackIcon className="w-6 h-6 text-gray-200 dark:text-gray-400"/>
                            <p className="text-md font-semibold text-gray-200 dark:text-gray-400">Back End</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-500 font-normal">
                            <ul>
                                <li>
                                    <a href="https://nodejs.org/en" target="_blank" className="hover:underline line-clamp-1">NodeJS</a>
                                </li>

                                <li>
                                    <a href="https://expressjs.com/" target="_blank" className="hover:underline line-clamp-1">Express.js</a>
                                </li>

                                <li>
                                    <a href="https://www.python.org/" target="_blank" className="hover:underline line-clamp-1">Python</a>
                                </li>

                                <li>
                                    <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" className="hover:underline line-clamp-1">REST API</a>
                                </li>

                                <li>
                                    <a href="https://www.mongodb.com/" target="_blank" className="hover:underline line-clamp-1">MongoDB</a>
                                </li>
                                
                                <li>
                                    <a href="https://www.postgresql.org/" target="_blank" className="hover:underline line-clamp-1">PostgreSQL</a>
                                </li>        

                            </ul>
                        </div>
                    </div>

                    <div className="w-3/4 h-full lg:w-full shadow-md rounded-lg hover:shadow-2xl hover:scale-105 duration-200 ease-in dark:shadow-2xl">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <WrenchScrewdriverIcon className="w-6 h-6 text-gray-200 dark:text-gray-400"/>
                            <p className="text-md font-semibold text-gray-200 dark:text-gray-400">Others</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-500 font-normal">
                            <ul>
                                <li>
                                    <a href="https://jestjs.io/" target="_blank" className="hover:underline line-clamp-1">Jest</a>
                                </li>

                                <li>
                                    <a href="https://azure.microsoft.com/en-ca" target="_blank" className="hover:underline line-clamp-1">Microsoft Azure</a>
                                </li> 

                                <li>
                                    <a href="https://powerplatform.microsoft.com/" target="_blank" className="hover:underline line-clamp-1">Power Platform</a>
                                </li> 

                                <li>
                                    <a href="https://git-scm.com/" target="_blank" className="hover:underline line-clamp-1">Git</a>
                                </li>

                                <li>
                                    <a href="https://www.docker.com/" target="_blank" className="hover:underline line-clamp-1">Docker</a>
                                </li>

                                <li>
                                    <a href="https://github.com/features/actions" target="_blank" className="hover:underline line-clamp-1">Github Actions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

