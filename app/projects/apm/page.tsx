import Image from "next/image"
import BackToTop from "@/app/components/BackToTop"
import Breadcrumbs from "@/app/components/Breadcrumbs"

export default function Apm() {


    return (
        <main className="mb-20">
            <Breadcrumbs prevRoute="projects" currentRoute="Apm" />

            {/* Intoduction section */}
            <section className="mb-16">
                <p className="text-2xl mb-4 font-bold tracking-wide">Application Portfolio Manager (APM)</p>
                <p className="text-sm text-gray-400 font-light dark:text-gray-600">Jan 5, 2023</p>
                <br/>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">This is an official prototype application developed by Rapid Prototype Design Unit(RPDU) - Enterprise Technology Division of Ontario Government. The goal was to develop a lightweight system application for managing, querying, and analyzing massive information from an enterprise level SQL database.</p>
                <br/>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">App Demo: <a className="text-blue-500 font-regular hover:underline" href="https://www.youtube.com/watch?v=ZTjdyVZpngI" target="_blank">see demo video</a></p>
                <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">GitHub Repo: <a className="text-blue-500 font-regular hover:underline" href="https://github.com/siranchao/ops_apm" target="_blank">https://github.com/siranchao/ops_apm</a></p>
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
                <iframe src="https://www.youtube.com/embed/ZTjdyVZpngI?si=DtJiPafdBnofujR-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"></iframe>
            </section>

            {/* Tech stack section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Application Portfolio Manager(APM) is a full-stack low-code application that entirely built on Microsoft PowerPlatform. UI and frontend portion was built with PowerApps, we utilized PowerAutomate to handle the workflow and customize API calls. And eventually all the data generated is stored in the Dataverse(a relational database similar to SQL Server)</p>
                <br />
                <div className="flex gap-4 flex-col items-center">
                    <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687729719/asset/projects/powerplatform4_agsvri.png" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                    <Image src="https://res.cloudinary.com/siran-chao/image/upload/v1687729719/asset/projects/powerplatform2_bstm2b.png" alt="powerapps-demo" width={500} height={400} className="rounded-lg shadow-xl"/>
                </div>
            </section>

            {/* Background section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">A little background</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Application Portfolio Manager(APM) was one of the essential projects that I&apos;ve participated during my coop. One of our client teams is responsible for managing and maintaining tens of thousands of software/system data used accross the OPS, to replace traditional sharepoint and spreadsheets. Our team was requested to build a prototype, and introduce a lightweight system application by mapping the original APM database schemas on Dataverse. And on top of that develop a clear and easy-to-use UI for managing, querying and analyzing these data. This project is currently in 2nd stage of development.
</p>
            </section>

            {/* Features section */}
            <section className="mb-16">
                <p className="text-xl mb-4 font-semibold underline">Features</p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">Here are some of the features:</p>
                <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    <li><span className="font-semibold pr-2">-</span> Role based access control</li>
                    <li><span className="font-semibold pr-2">-</span> Admin can manage users profile and permissions</li>   
                    <li><span className="font-semibold pr-2">-</span> User can perform basic CRUD operations for data</li>
                    <li><span className="font-semibold pr-2">-</span> Able to export excel reports and generate PowerBI dashboards</li>
                    <li><span className="font-semibold pr-2">-</span> Able manipulate complex data models and create new table fields</li>  
                    <li><span className="font-semibold pr-2">-</span> Perform risk assessment and indicate risk score for each record (coming soon)</li>
                </ul>
            </section>

            <BackToTop />
        </main>
    )
}