import Image from "next/image";
import BackToTop from "@/app/components/BackToTop";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function Museum() {
  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="projects" currentRoute="Portable Museum" />

      {/* Intoduction section */}
      <section className="mb-16">
        <p className="text-2xl mb-4 font-bold tracking-wide">Portable Museum</p>
        <p className="text-sm text-gray-400 font-light dark:text-gray-600">
          Feb 13, 2023
        </p>
        <br />
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Portable Museum is an online archive designed for searching, browsing,
          and collecting over two million artworks from the Metropolitan Museum
          of Art. This application is fully mobile responsive and primarily
          built on MERN stack plus Next.js and deployed on Vercel.
        </p>
        <br />
        <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          URL:{" "}
          <a
            className="text-blue-500 font-regular hover:underline"
            href="https://my-museum-siranchao.vercel.app/"
            target="_blank"
          >
            https://my-museum-siranchao.vercel.app/
          </a>
        </p>
        <p className="text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-400">
          GitHub:{" "}
          <a
            className="text-blue-500 font-regular hover:underline"
            href="https://github.com/siranchao/my_museum"
            target="_blank"
          >
            https://github.com/siranchao/my_museum
          </a>
        </p>
        <br />
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
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
          <a href="https://expressjs.com/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width={35}
              height={35}
            />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongo"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
            target="_blank"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap"
              width={35}
              height={35}
            />
          </a>
        </div>
      </section>

      {/* App image section */}
      <section className="flex gap-4 flex-col items-center mb-16">
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1687722247/asset/projects/museum1_odolpc.jpg"
          alt="museum-demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
        <Image
          src="https://res.cloudinary.com/siran-chao/image/upload/v1687722247/asset/projects/museum2_eut1wq.jpg"
          alt="museum-demo"
          width={500}
          height={400}
          className="rounded-lg shadow-xl"
        />
      </section>

      {/* Tech stack section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Tech stack</p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          This application is built on MERN stack and primarily use Next.js as
          production framework. Utilize Next.js to handle SSR/SSG, page routing,
          and SEO optimization. In the API layer, we use public API from
          Metropolitan Museum of Art to fetch artworks data. Also there is a
          separate server application using Node and express.js to handling user
          authentication and application data in MongoDB.{" "}
          <span className="text-blue-500 font-regular hover:underline">
            (
            <a
              href="https://github.com/siranchao/my_museum_api"
              target="_blank"
            >
              see API repo
            </a>
            )
          </span>
        </p>
        <br />
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Here are the tech stacks and tools used in this project:
        </p>
        <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold pr-2">Front-end:</span> React,
            Next.13, react-bootstrap, Jotai, JWT
          </li>
          <li>
            <span className="font-semibold pr-2">Back-end:</span> JavaScript,
            Express.js, Node, MongoDB, Mongoose, Passport, JWT
          </li>
          <li>
            <span className="font-semibold pr-2">Deployment:</span> Vercel,
            Cyclic
          </li>
        </ul>
      </section>

      {/* Background section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">
          A little background
        </p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          The Metropolitan Museum of Art (aka &apos;The Met&apos;) is one of the
          world&apos;s largest and most visited museums with a collection of
          over two million artworks. This app is built for museum and art
          lovers. We created a lightweight online archive that allows users to
          browse and query almost all the artworks in &apos;The Met&apos;. In
          addition, users can save their favorite artworks or perform advanced
          searches by multiple keywords.
        </p>
      </section>

      {/* Features section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Features</p>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Here are some of the features:
        </p>
        <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          <li>
            <span className="font-semibold pr-2">-</span> Support custom
            credentials for login
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> All features are
            available for registed users only
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> View artworks by
            department or category
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Simple search or
            advanced search
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> Save favorite artworks
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> View artwork profile
            and specific infomation
          </li>
          <li>
            <span className="font-semibold pr-2">-</span> User&apos;s search
            history are stored for future reference
          </li>
        </ul>
      </section>

      {/* Additional info section */}
      <section className="mb-16">
        <p className="text-xl mb-4 font-semibold underline">Additional info</p>
        <p className="text-sm font-regular leading-relaxed text-gray-600 dark:text-gray-400">
          All artwork infomation are fetched from The Metropolitan Museum of Art
          Collection API:{" "}
          <a
            className="text-blue-500  hover:underline"
            href="https://metmuseum.github.io/"
            target="_blank"
          >
            visit to learn more
          </a>
        </p>
      </section>

      <BackToTop />
    </main>
  );
}
