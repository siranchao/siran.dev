import Image from "next/image";
import BackToTop from "@/app/components/_lib/BackToTop";
import Breadcrumbs from "@/app/components/_lib/Breadcrumbs";

export default function ShopeePage() {
  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="projects" currentRoute="Shopee E-Commerce" />

      {/* Intoduction section */}
      <section className="mb-16">
        <p className="text-2xl mb-4 font-bold tracking-wide">
          Shopee E-Commerce
        </p>
        <p className="text-sm text-gray-400 font-light dark:text-gray-600">
          Oct 8, 2023
        </p>
        <br />
        <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            Shopee is an open-source platform aim to help small businesses to
            engage e-commerce more efficiently. The project consits of two
            separate applications: <strong>Shoppe-Admin</strong>, a web-based
            admin dashboard & CMS tool; and <strong>Shoppe-Store</strong>, a
            simple e-commerce shop template. The project was built with the main
            coding stack:{" "}
            <strong>
              TypeScript + React + Next.js + Tailwind + Prisma + MySQL
            </strong>
          </p>
          <br />
          <p>
            The project has been well tested and deployed. Please feel free to
            checkout the following URLs or review source codes. Both
            Shoppe-Admin & Shopee-Store are using headless UI frameworks and to
            support wide range customization. You can use them to build your own
            e-commerce platform with extra features and functionalities.
          </p>
        </div>
        <br />

        <p className="mb-1 text-sm underline font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          Admin Dashboard & CMS
        </p>
        {/* <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">URL: <a className="text-blue-500 font-regular hover:underline" href="https://shopee-admin-ecru.vercel.app/" target="_blank">https://shopee-admin-ecru.vercel.app/</a></p> */}
        <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          GitHub:{" "}
          <a
            className="text-blue-500 font-regular hover:underline"
            href="https://github.com/siranchao/shopee-admin"
            target="_blank"
          >
            https://github.com/siranchao/shopee-admin
          </a>
        </p>

        <br />

        <p className="mb-1 text-sm underline font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          Shopee Store
        </p>
        {/* <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">URL: <a className="text-blue-500 font-regular hover:underline" href="https://shopee-store-psi.vercel.app/" target="_blank">https://shopee-store-psi.vercel.app/</a></p> */}
        <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          GitHub:{" "}
          <a
            className="text-blue-500 font-regular hover:underline"
            href="https://github.com/siranchao/shopee-store"
            target="_blank"
          >
            https://github.com/siranchao/shopee-store
          </a>
        </p>

        <br />

        <div className="flex gap-4 flex-wrap">
          <a href="https://www.typescriptlang.org/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width={35}
              height={35}
            />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="react"
              width={35}
              height={35}
            />
          </a>
          <a href="https://nextjs.org/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
              alt="next"
              width={35}
              height={35}
            />
          </a>
          <a href="https://nodejs.org/en" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              alt="node"
              width={35}
              height={35}
            />
          </a>
          <a href="https://www.prisma.io/" target="_blank">
            <Image src="/dev/prisma.webp" alt="prisma" width={35} height={35} />
          </a>
          <a href="https://www.mysql.com/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              width={35}
              height={35}
            />
          </a>
        </div>
      </section>

      {/* App image section */}
      <section className="flex gap-4 flex-col items-center mb-16">
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1696903478/asset/projects/shopee-3_tokkx4.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1696903476/asset/projects/shopee-4_a4qgzu.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1696903476/asset/projects/shopee-5_avewsx.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1696903477/asset/projects/shopee-2_jnnczo.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1696903476/asset/projects/shopee-1_t0wfxx.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </section>

      {/* Tech stack section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Shopee is an intermediate level full-stack application built with
          TypeScript + React + Next.js and heavily used Next API router + Prisma
          as backend API server. In addition,this project invloved a numbers of
          technologies and libraries (listed below):
        </p>
        <br />
        <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold pr-2">Frontend JS framework:</span>{" "}
            React, Next13
          </li>
          <li>
            <span className="font-semibold pr-2">CSS & UI framework:</span>
            Tailwind.css, Headless UI, shadcn/ui, Lucide React
          </li>
          <li>
            <span className="font-semibold pr-2">State management:</span>Zustand
          </li>
          <li>
            <span className="font-semibold pr-2">Form & validation:</span>
            React-hook-form, Zod
          </li>
          <li>
            <span className="font-semibold pr-2">Data visualization:</span>
            Recharts
          </li>
          <li>
            <span className="font-semibold pr-2">
              Authentication & User management:
            </span>
            Clerk
          </li>
          <li>
            <span className="font-semibold pr-2">
              Image store & management:
            </span>
            Cloudinary
          </li>
          <li>
            <span className="font-semibold pr-2">Backend web APIs:</span>Next
            API router, Prisma ORM
          </li>
          <li>
            <span className="font-semibold pr-2">Database:</span>MySQL,
            PlanetScale(serverless database)
          </li>
          <li>
            <span className="font-semibold pr-2">Payment service:</span>Stripe
          </li>
        </ul>
      </section>

      {/* Demo video section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline align-left">
          Demo video
        </p>
        <div className="flex gap-4 flex-col items-center ">
          <iframe
            src="https://www.youtube.com/embed/stRBZmJWm-8?si=4HKJO3w8Xf725sk9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"
          ></iframe>
        </div>
      </section>

      {/* Features section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Features</p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Here are some of the features:
        </p>
        <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold pr-2">-</span> Admin: view dashboard
            tables and charts from real time data, KPI and trend analysis
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Admin: create, update
            and delete essential contents e.g APIs, product info
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Admin: view and manage
            all orders generated from store
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Admin: create and
            manage multiple stores
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Store: locally stored
            shopping cart, not session required
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Store: support
            multiple payment methods, Credit/Debit Card
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Fully responsive
            design, but larger screen are recommended for Admin app
          </li>
        </ul>
      </section>

      {/* Additional info section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Additional info</p>
        <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">
          Shopee Admin support OAuth authentication, it is suggest to use{" "}
          <strong>gmail</strong> or <strong>facebook</strong> account to proceed
          for sake of simplicity.
        </p>
        <br />
        <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">
          In Shopee Store, users will be redirect to Stripe payment page after
          checkout. Currently the project is using test payment method, so you
          can use{" "}
          <a
            className="text-blue-500  hover:underline"
            href="https://stripe.com/docs/testing?testing-method=card-numbers#visa"
            target="_blank"
          >
            test card info
          </a>{" "}
          to stimulate the process. For more information please visit{" "}
          <a
            className="text-blue-500  hover:underline"
            href="https://stripe.com/en-ca"
            target="_blank"
          >
            Stripe.com
          </a>
        </p>
      </section>

      <BackToTop />
    </main>
  );
}
