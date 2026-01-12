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
                className="btn normal-case bg-slate-900 text-white hover:bg-slate-800 border-none dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
              >
                Get in touch
              </a>
              <a
                href="/projects"
                className="btn normal-case bg-transparent border border-slate-200 text-slate-900 hover:bg-white/70 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[320px] aspect-square">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-[28px] bg-white/90 shadow-[0_24px_60px_rgba(99,102,241,0.25)] ring-4 ring-white/80 p-4 dark:bg-base-100 dark:ring-base-200/40">
                <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-base-300/30">
                  <a
                    href="https://www.linkedin.com/in/siran-chao/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/myself.jpg"
                      alt="Myself"
                      fill
                      priority
                      className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
