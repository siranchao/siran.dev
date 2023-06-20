import Image from "next/image"

export default function Skill() {

    return (
        <>
            <div className="flex flex-col w-full border-opacity-50 mb-20">
                <div>
                    <p className="text-2xl mb-4 font-bold">More about me</p>
                    <p className="text-gray-600 mb-4">Passionate about coding, cooking, video gaming, and pets. I&apos;m always excited to learn and apply my skills in a professional setting. Connect with me if you want to know more.</p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/siran-chao/" target="_blank" className="hover:scale-110 delay-100"><Image
                                        src="/icon/linkedin.svg"
                                        alt="linkedin"
                                        width={25}
                                        height={25}
                                        className="fill-current"
                                    /></a>
                                <a href="https://github.com/siranchao" target="_blank"  className="hover:scale-110 delay-100"><Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"
                                    /></a>
                                <a href="mailto:siranchao@gmail.com" target="_blank"  className="hover:scale-110 delay-100"><Image
                                        src="/icon/gmail.svg"
                                        alt="gmail"
                                        width={25}
                                        height={25}
                                        className="fill-current"
                                    /></a>
                        </div>

                        <button className="btn btn-ghost btn-sm normal-case">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="download"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"></line> </g> </g> </g> </g> </g></svg>
                            Download CV
                        </button>
                    </div>

                </div>
                <div className="divider text-gray-600 text-sm">Stacks and Skills</div>

                <div className="flex flex-col items-center gap-4 lg:flex-row">
                    <div className="w-96 shadow-xl hover:scale-105 delay-100 rounded-lg">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <Image
                                src="/dev/html.png"
                                alt="html"
                                width={25}
                                height={25}
                            />
                            <p className="text-md font-semibold text-white">Front End</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-600 font-semibold">
                            <ul>
                                <li>JS</li>
                                <li>TS</li>
                                <li>html</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-96 shadow-xl hover:scale-105 delay-100 rounded-lg">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <Image
                                src="/dev/server.png"
                                alt="html"
                                width={25}
                                height={25}
                            />
                            <p className="text-md font-semibold text-white">Back End</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-600 font-semibold">
                            <ul>
                                <li>JS</li>
                                <li>TS</li>
                                <li>html</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-96 shadow-xl hover:scale-105 delay-100 rounded-lg">
                        <div className="bg-info-content flex flex-col items-center justify-center py-2 rounded-t-lg">
                            <Image
                                src="/dev/tool.png"
                                alt="html"
                                width={25}
                                height={25}
                            />
                            <p className="text-md font-semibold text-white">Tools</p>
                        </div>

                        <div className="text-center p-4 text-sm text-gray-600 font-semibold">
                            <ul>
                                <li>JS</li>
                                <li>TS</li>
                                <li>html</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

