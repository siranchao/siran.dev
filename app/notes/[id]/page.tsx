import Warning from "@/app/components/Warning";
import BackToTop from "@/app/components/BackToTop";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Tag from "@/app/components/Tag";
import Image from "next/image";
import { PostData } from "@/app/lib/types";
import axios from "axios";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata( { params, searchParams }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const id = params.id
 
    // fetch data
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/post/metadata/${id}`)

    return {
        title: res.data.title,
        description: `Siran.dev - Note title: ${res.data.title}`
    }
}



async function getData(id: string) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API as string}/api/post/${id}`)
    if(res.status !== 200) {
        return null
    }

    return res.data
}
function selectTheme(index: number) {
    let val: string = "";
    switch (index) {
        case 0:
            val = "info"
            break;
        case 1:
            val = "warning"
            break;
        case 2:
            val = "success"
            break;
         case 3:
            val = "error"
            break;
        default:
            val = "accent"
            break;
    }
    return val;
}

export default async function Note({ params }: { params: { id: string } }){
    const data = await getData(params.id)
    const content: PostData = JSON.parse(data.content)

    if(!data) {
        return <Warning msg={"No data can be found, please try again"} />
    }

    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="notes" currentRoute={content.title} />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">{content.title}</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">{new Date(data.createdAt).toDateString()}</p>
                <div className="mt-2">
                    {data?.categories.length > 0 && data.categories.map((tag: {id: string, name: string}, index: number) => (
                       <Tag key={index} id={tag.id} name={tag.name} color={selectTheme(index)} /> 
                    ))}
                </div>
                <br/>
                <p className="text-sm pt-2 leading-relaxed text-gray-600 dark:text-gray-400">{content.info}</p>
            </section>


            {/* Image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                {content.primaryImgUrl && <Image src={content.primaryImgUrl} alt="primary-img" width={500} height={400} className="rounded-lg shadow-xl"/>}
                {content.secondaryImgUrl && <Image src={content.secondaryImgUrl} alt="secondary-img" width={500} height={400} className="rounded-lg shadow-xl"/>}            
            </section>


            {/* video section */}
            {content.videoUrl && 
                <section className="mb-16">
                    <p className="text-xl mb-4 font-semibold underline">Demo video</p>
                    <iframe src={content.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"></iframe>
                </section>
            }


            {/* Subtitle section */}
            {content.mainText && 
                <section className="mb-16">
                    <p className="text-xl mb-4 font-semibold underline">{content.subtitle}</p>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{content.mainText}</p>
                </section>
            }


            {/* URL info section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Resource info</p>
                <div className="flex flex-col gap-2">
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{content.primaryLink}: <span className="ml-2"><a className="text-blue-500 hover:underline" href={content.primaryUrl} target="_blank">{content.primaryUrl}</a></span> 
                    </p>
                    { content.secondaryLink && <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{content.secondaryLink}: <span className="ml-2"><a className="text-blue-500 hover:underline" href={content.secondaryUrl} target="_blank">{content.secondaryUrl}</a></span> 
                    </p>}
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Page URL: <span className="ml-2"><a className="text-blue-500 hover:underline" href={`${process.env.NEXT_PUBLIC_API as string}/notes/${params.id}/`} target="_blank">{`${process.env.NEXT_PUBLIC_API as string}/notes/${params.id}/`}</a></span> 
                    </p>
                </div>
            </section>

            <section className="mb-16 mt-20">
                <div className="m-auto w-full flex flex-col gap-2 py-4 px-8 items-start bg-gray-200 dark:bg-gray-800">
                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Good to know:</span>
                    </div>
                    <ul className="mt-2 text-sm leading-loose text-gray-500 dark:text-gray-400">
                        <li>1. Please retain the original link for reference, thank you!</li>
                        <li>2. All resources are collected from the Internet and are used for study purposes only.</li>
                        <li>3. Please do not use for commercial purposes.</li>
                        <li>4. Any question please contact: siranchao@gmail.com</li>
                    </ul>
                </div>
            </section>


            <BackToTop />
        </main>
    )
}