import Image from "next/image";
export default function AboutMe() {
  return (
    <section id="contact">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-[30px] font-medium leading-[36px] tracking-[0.3955px] text-[#0a0a0a] dark:text-slate-100">
            About Me
          </h2>
          <div className="space-y-4 text-[16px] leading-[26px] text-[#364153] dark:text-slate-300 max-w-[700px]">
            <p>
              I&apos;m an enthusiastic fullstack developer, always excited to
              learn and apply my skills in professional settings. I focus on
              creating intuitive, high-quality user experiences.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll probably find me hiking in
              the mountains or experimenting with new photography equipment.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/siran-chao/"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Image
                src="/icon/linkedin.svg"
                alt="linkedin"
                width={18}
                height={18}
              />
            </a>
            <a
              href="https://github.com/siranchao"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Image
                src="/icon/github.svg"
                alt="github"
                width={18}
                height={18}
              />
            </a>
            <a
              href="mailto:siranchao@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-lg bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors flex items-center justify-center"
              aria-label="Email"
            >
              <Image src="/icon/gmail.svg" alt="gmail" width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-[24px] font-medium leading-[32px] tracking-[0.0703px] text-[#0a0a0a] dark:text-slate-100">
            Stack &amp; Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[14px] bg-[#f9fafb] dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-[10px] bg-[#dbeafe] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 9L4 12L8 15"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 9L20 12L16 15"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 6L10 18"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-[#0a0a0a] dark:text-slate-100">
                  Front End
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[12px] text-[#364153] dark:text-slate-300">
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
                <span>Redux</span>
                <span>HTML5</span>
                <span>Webpack/Vite</span>
              </div>
            </div>

            <div className="rounded-[14px] bg-[#f9fafb] dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-[10px] bg-[#f3e8ff] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H20"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H20"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-[#0a0a0a] dark:text-slate-100">
                  Back End
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[12px] text-[#364153] dark:text-slate-300">
                <span>Node.js</span>
                <span>Express</span>
                <span>NestJS</span>
                <span>RESTful API</span>
                <span>MongoDB</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="rounded-[14px] bg-[#f9fafb] dark:bg-slate-900/60 p-5">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-[10px] bg-[#dcfce7] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"
                      stroke="#16A34A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[14px] font-semibold text-[#0a0a0a] dark:text-slate-100">
                  Others
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-[12px] text-[#364153] dark:text-slate-300">
                <span>Jest</span>
                <span>Docker</span>
                <span>CI/CD</span>
                <span>Git</span>
                <span>Agile/Scrum</span>
                <span>Figma</span>
                <span>Power Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
