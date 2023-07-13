import Image from "next/image"
import Link from "next/link"



export default function Projects() {

    return (
        <div className="mb-20">
          <p className="text-2xl mb-4 font-bold">Recent Projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
            {/* 1 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/kudos.png"
                    alt="kudos"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Kudos</h3>
                    <p className="text-gray-600 line-clamp-3">Create, send, and share kudos with each other in a casual and interesting way!</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/kudos" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/museum.png"
                    alt="museum"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Portable Museum</h3>
                    <p className="text-gray-600  line-clamp-3">An online archive app designed for museum and art lovers!</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/museum" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/kitchen.svg"
                    alt="kitchen"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Siran&apos;s Kitchen</h3>
                    <p className="text-gray-600  line-clamp-3">A simple web app to record and share your favorite food recipes</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/kitchen" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/powerapps.png"
                    alt="powerapps"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Delegation of Authority Registry</h3>
                    <p className="text-gray-600  line-clamp-3">A low-code application allows users to register and manage their delegation of authority process</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/doa" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/siran.dev.png"
                    alt="siran.dev"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Siran.dev</h3>
                    <p className="text-gray-600 line-clamp-3">Welcome to my portfolio website, here you can view my works and find useful resources!</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/sirandev" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            {/* 6 */}
            <div className="card card-compact w-3/4 h-full md:w-full shadow-md hover:shadow-2xl duration-200 ease-in bg-gray-100">
                {/* add project logo here */}
                <Image
                    src="/projects/powerapps2.png"
                    alt="powerapps"
                    width={50}
                    height={50}
                    className="m-auto pt-8 pb-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg dark:text-gray-800 line-clamp-1">Application Portfolio Manager</h3>
                    <p className="text-gray-600 line-clamp-3">A lightweight system app for managing, querying, and analyzing massive information from an enterprise level SQL database</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/apm" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
                        {/* add github link and app link */}
                        <div className="flex gap-4 items-center">
                            <div className="tooltip" data-tip="source code" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/icon/github.svg"
                                        alt="github"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>

                            <div className="tooltip" data-tip="visit site" >
                                <a href="https://github.com/siranchao" target="_blank">
                                    <Image
                                        src="/dev/url.svg"
                                        alt="url"
                                        width={25}
                                        height={25}
                                        className="fill-current"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        
          <button className="btn btn-link normal-case mt-4 pl-0 text-gray-600 dark:text-gray-400"><Link href={"/projects"}>All Projects</Link></button>
        </div>
    )
}