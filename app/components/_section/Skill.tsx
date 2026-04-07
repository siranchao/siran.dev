import {
  CodeBracketIcon,
  ServerStackIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

export default function Skill() {
  return (
    <>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-base-content">
            Stacks &amp; Skills
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center auto-rows-fr">
          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 border border-base-300/80 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CodeBracketIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Front End</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Next.js", "Redux", "HTML5", "Webpack/Vite"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-base-200 text-xs font-medium text-base-content/70">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 border border-base-300/80 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ServerStackIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Back End</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["NodeJS", "Express", "Nest.js", "RESTful API", "MongoDB", "PostgreSQL"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-base-200 text-xs font-medium text-base-content/70">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 border border-base-300/80 hover:shadow-md transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Others</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Jest", "Docker", "CI/CD", "Git", "Agile/Scrum", "Figma", "Power Platform"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-lg bg-base-200 text-xs font-medium text-base-content/70">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
