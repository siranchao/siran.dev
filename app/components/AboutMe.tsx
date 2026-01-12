import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold text-base-content">About Me</h2>
          <p className="mt-4 text-sm leading-relaxed text-base-content/70 max-w-prose">
            I&apos;m an enthusiastic full-stack developer, always excited to learn and apply my
            skills in professional settings. I focus on building scalable web applications with
            high-quality user experiences.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-base-content/70 max-w-prose">
            When I&apos;m not coding, you&apos;ll probably find me hiking in the mountains or
            experimenting with new photography equipment.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/siran-chao/"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-lg bg-base-100 ring-1 ring-base-300/60 hover:bg-base-200 transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Image src="/icon/linkedin.svg" alt="linkedin" width={18} height={18} />
            </a>
            <a
              href="https://github.com/siranchao"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-lg bg-base-100 ring-1 ring-base-300/60 hover:bg-base-200 transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Image src="/icon/github.svg" alt="github" width={18} height={18} />
            </a>
            <a
              href="mailto:siranchao@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 w-10 rounded-lg bg-base-100 ring-1 ring-base-300/60 hover:bg-base-200 transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <Image src="/icon/gmail.svg" alt="gmail" width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-blue-600 text-white shadow-sm overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-bold">Let&apos;s work together</h3>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V21a1 1 0 0 1-1.09 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.2.9.45 1.76.75 2.58a1 1 0 0 1-.23 1L8.09 8.91a16 16 0 0 0 6 6l1.58-1.52a1 1 0 0 1 1-.23c.82.3 1.68.55 2.58.75a1 1 0 0 1 .75 1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>+1 647-764-1309</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>siranchao@gmail.com</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-sm w-full bg-white/15 placeholder:text-white/70 text-white border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button className="btn btn-sm w-full bg-white text-blue-700 hover:bg-white/90 border-none normal-case">
                Send Message
              </button>
              <p className="text-[11px] text-white/70">
                UI only — this button doesn&apos;t submit anywhere yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

