import Image from "next/image";
import BackToTop from "@/app/components/_lib/BackToTop";
import Breadcrumbs from "@/app/components/_lib/Breadcrumbs";

export default function ClerkioPage() {
  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="projects" currentRoute="Clerk.io" />

      {/* Intoduction section */}
      <section className="mb-16">
        <p className="text-2xl mb-4 font-bold tracking-wide">
          Clerk.io - AI Assistant
        </p>
        <p className="text-sm text-gray-400 font-light dark:text-gray-600">
          Dec 6, 2023
        </p>
        <br />
        <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <p>
            Clerk.io is an simple SaaS project that allow user to upload PDF
            files and use LLM and Generative AI to generate response. This
            application is perfect for students or any amateurs who want to
            learn more about LLM and AI. Simply upload your PDF file and it will
            automatically process and train your own LLM model, and give actuate
            responses based on the context provided.
          </p>
          <br />
          <p>
            Clerk.io is an open-source software built with following code stacks
            and technologies:{" "}
            <strong>
              TypeScript + React + Next.js + tRPC + Tailwind + Prisma, and
              LangChain + Pinecone + OpenAI
            </strong>
          </p>
        </div>
        <br />

        <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          GitHub:{" "}
          <a
            className="text-blue-500 font-regular hover:underline"
            href="https://github.com/siranchao/clerk.io"
            target="_blank"
          >
            https://github.com/siranchao/clerk.io
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
          src="https://res.cloudinary.com/siran-chao/image/upload/v1701897773/Clerk.io/1_x4rm34.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1701897773/Clerk.io/2_m4jwd4.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1701897773/Clerk.io/3_gzcolv.jpg"
          alt="demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </section>

      {/* Demo video section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline align-left">
          Demo video
        </p>
        <div className="flex gap-4 flex-col items-center ">
          <iframe
            src="https://www.youtube.com/embed/GENHOcXq1-8?si=Th_UZBGj7b6AiP7e"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"
          ></iframe>
        </div>
      </section>

      {/* Tech stack section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          The project is primarilybuilt with TypeScript + React + Next.js + tRPC
          and use Tailwind CSS + Shadcn as UI framework. Also it involves many
          other libraries and packages including:
        </p>
        <br />
        <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold pr-2">Frontend JS framework:</span>{" "}
            React, Next 13.5
          </li>
          <li>
            <span className="font-semibold pr-2">CSS & UI framework:</span>
            Tailwind.css, shadcn/ui
          </li>
          <li>
            <span className="font-semibold pr-2">API & Data fetching:</span>
            tRPC, React Query, Prisma ORM
          </li>
          <li>
            <span className="font-semibold pr-2">Form & validation:</span>
            React-hook-form, Zod
          </li>
          <li>
            <span className="font-semibold pr-2">
              Authentication & User management:
            </span>
            Clerk
          </li>
          <li>
            <span className="font-semibold pr-2">Blob Storeage:</span>
            Uploadthing
          </li>
          <li>
            <span className="font-semibold pr-2">Database:</span>
            MySQL-PlanetScale(serverless database), Pinecone
          </li>
          <li>
            <span className="font-semibold pr-2">Payment service:</span>Stripe
          </li>
        </ul>
        <br />

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Clerk.io is heavily based on LangChain + Pinecone to combine Documents
          into a vector database. And using OpenAI APIs as embeddings to
          generate AI responses. Here the diagram shows the overall idea of how
          this process works:
        </p>
        <br />
        <div className="relative flex flex-row justify-center items-center mb-16">
          <Image
            src="https://res.cloudinary.com/siran-chao/image/upload/v1701895525/Clerk.io/mind-map-L_s31gun.png"
            alt="mind-map"
            width={700}
            height={500}
            className="rounded-lg shadow-xl"
            quality={100}
          />
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
            <span className="font-semibold pr-2">-</span> Simple drag and drop
            for file upload
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Optimistic updates
            with tPRC and React Query
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Infinite query during
            chat conversation
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Fully mobile
            responsive with accessibility
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Completely free to use
            and able to upgrade to premium plan
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Use Stripe for payment
            and subscription management
          </li>
        </ul>
      </section>

      {/* Additional info section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Additional info</p>
        <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">
          Clerk.io support OAuth authentication, it is suggest to use{" "}
          <strong>gmail</strong> or <strong>facebook</strong> account to proceed
          for sake of simplicity.
        </p>
        <br />

        <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">
          In payment session, users will be redirect to Stripe payment page for
          proceeding. Currently the project is using test payment method, so you
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
