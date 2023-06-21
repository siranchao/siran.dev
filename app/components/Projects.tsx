import Image from "next/image"
import Link from "next/link"


export default function Projects() {

    return (
        <div className="mb-20">
          <p className="text-2xl mb-4 font-bold">Recent projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/kudos.png"
                    alt="kudos"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Kudos</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
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

            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/museum.png"
                    alt="museum"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Portable Museum</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
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

            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/kitchen.svg"
                    alt="kitchen"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Siran&apos;s Kitchen</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
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

            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/powerapps.png"
                    alt="powerapps"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Delegation of Authority Registry</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
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

            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/siran.dev.png"
                    alt="siran.dev"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Siran.dev</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
                    {/* add page route for this project */}
                    <div className="card-actions mt-2 flex justify-between items-center">
                        <Link href="/projects/siran" className="btn btn-ghost btn-sm p-0 normal-case text-accent-focus">Read More</Link>
                        
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

            <div className="card card-compact w-90 h-80 bg-base-100 shadow-md hover:shadow-2xl duration-200 ease-in">
                {/* add project logo here */}
                <Image
                    src="/projects/powerapps2.png"
                    alt="powerapps"
                    width={50}
                    height={50}
                    className="m-auto py-4"
                />
                <div className="card-body">
                    {/* add project name and description here */}
                    <h3 className="card-title text-lg">Application Portfolio Manager</h3>
                    <p className="text-gray-600">If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
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
        
          <button className="btn btn-link normal-case mt-4 px-4 text-gray-600"><Link href={"/projects"}>All Projects</Link></button>
        </div>
    )
}