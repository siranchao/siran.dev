import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function Doa() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="Doa" />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">Delegation of Authority Registry</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">Aug 15, 2022</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This is an official application developed by Rapid Prototype Design Unit(RPDU) - Enterprise Technology Division of Ontario Government. This application was built with Microsoft low-code platform, allows users to register and manage their delegation of authority procedures.</p>
                <br/>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">App Demo: <a className="text-blue-500 font-regular hover:underline" href="https://www.youtube.com/watch?v=Wo__SPS7CUM" target="_blank">see demo video</a></p>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub Repo: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/ops_doa" target="_blank">https://github.com/siranchao/ops_doa</a></p>
                <br/>
                <div className="flex gap-4 flex-wrap">
                    <a href="https://powerapps.microsoft.com/en-au/" target="_blank">
                        <Image src="/lowcode/powerapps.png" alt="powerapps" width={35} height={35} />
                    </a>
                    <a href="https://powerautomate.microsoft.com/en-ca/" target="_blank">
                        <Image src="/lowcode/PowerAutomate.png" alt="powerautomate" width={35} height={35} />
                    </a>
                    <a href="https://powerbi.microsoft.com/en-ca/" target="_blank">
                        <Image src="/lowcode/Power_BI.png" alt="powerBI" width={35} height={35} />
                    </a>
                    <a href="https://powerplatform.microsoft.com/en-ca/" target="_blank">
                        <Image src="/lowcode/dataverse.png" alt="dataverse" width={35} height={35} />
                    </a>
                    <a href="https://azure.microsoft.com/en-ca" target="_blank">
                        <Image src="/lowcode/azure.png" alt="azure" width={35} height={35} />
                    </a>
                </div>
            </section>

            {/* App image section */}
            <section className="flex gap-4 flex-col items-center mb-16">
                <iframe src="https://www.youtube.com/embed/Wo__SPS7CUM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"></iframe>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Delegation of Authority(DOA) is a full-stack low-code application that entirely built on Microsoft PowerPlatform. UI and frontend portion was built with PowerApps, then we utilized PowerAutomate to handle the workflow and intergration between Azure and PowerPlatform. And eventually all the data generated is stored in the Dataverse(a relational database similar to SQL Server)</p>
                <br />
                <div className="flex gap-4 flex-col items-center">
                    <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687730991/asset/projects/platform_gvdxbi.png" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                    {/* <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687729719/asset/projects/powerplatform2_bstm2b.png" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/> */}
                    <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687729719/asset/projects/powerplatform4_agsvri.png" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                    <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687729719/asset/projects/PowerApps_sneymr.jpg" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                </div>
            </section>

            {/* Background section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">A little background</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Delegation of Authority(DOA) was one of the projects that I&apos;ve primarily done during my coop. The initial idea was to build a prototype for the OPS(Ontario Public Servant) employees to manage their DOA requests. This project is part of the OPS digitization initiative, which aims to leverage multiple development platforms to build easy-to-use applications that streamline traditional workflows, replace manual processes, and improve operational efficiency. This project is currently in production.</p>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the features:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Automatic login with Azure AD account</li>
                    <li><span className="font-semibold pr-2">-</span> Simple process to register new DOA requests</li>
                    <li><span className="font-semibold pr-2">-</span> Auto-complete of user search</li>
                    <li><span className="font-semibold pr-2">-</span> Email notifications when DOA status changes</li>
                    <li><span className="font-semibold pr-2">-</span> Able to make/discard drafts and templates</li>  
                    <li><span className="font-semibold pr-2">-</span> Find and view DOA records by multiple criteria</li>
                </ul>
            </section>

            <BackToTop />
        </main>
    )
}