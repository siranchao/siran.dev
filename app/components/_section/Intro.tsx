import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section className="animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
                Developer &amp; Creator
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-base-content leading-[1.1]">
                Hey, I&apos;m{" "}
                <span className="font-display font-normal italic text-primary tracking-wider">
                  Siran
                </span>
              </h1>
            </div>
            <p className="text-base sm:text-lg text-base-content/60 leading-relaxed max-w-prose">
              Welcome to my digital nook. Here I share what I&apos;ve been
              working on recently and things I found interesting. Hope you like
              it!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn normal-case bg-base-content text-base-100 hover:bg-base-content/85 border-none rounded-xl px-6 font-semibold tracking-wide text-sm"
              >
                Get in Touch
              </a>
              <a
                href="/notes"
                className="btn normal-case bg-transparent border border-base-300 text-base-content hover:bg-base-300/50 rounded-xl px-6 font-semibold tracking-wide text-sm"
              >
                My Scribbles
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-slide-up delay-200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-700"></div>
              <Image
                alt="Siran Profile"
                className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500"
                src="/me.png"
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
