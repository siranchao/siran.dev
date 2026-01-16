import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl tracking-wide sm:text-5xl font-extrabold tracking-tight text-base-content">
              Hey, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
                Siran
              </span>
            </h1>
            <p className="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-prose">
              Welcome to my digital nook. Here I share what I&apos;ve been
              working on recently and things I found interesting. Hope you like
              it!
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="btn w-32 normal-case bg-slate-900 text-white hover:bg-slate-800 border-none dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
              >
                Get in Touch
              </a>
              <a
                href="/projects"
                className="btn w-32 normal-case bg-transparent border border-slate-300 text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                alt="Siran Profile"
                className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
                src="/me.png"
                //src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2d-ahoOdQIBBhmH4JInYusoma-So5JRWRA_vA-po7M_GeTy00HAxMxyHY5eL3GvIKk-LxSe5vp2sIdhs43MBGyVGMSz4OGTAClUNgTb6kUd3F1hBmowLMzkg6Qpyv3aZ9EUt1aCLucHBxIN4ZVqtHW28j3BRv8G2bUVYe3Ln1oCKVgt9vHd4a9HTv9o6rEIQv7cLw-UPZR-CYynMJ7P6j0_Lq0pOs-6tho2fcfbRY2SuD3aLXzUiIQb1EtHwpie1tYfMEnbZhUrBV"
                width={288}
                height={288}
                sizes="(min-width: 768px) 288px, 224px"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
