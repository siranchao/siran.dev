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
          <h2 className="text-2xl font-bold text-base-content">
            Stacks &amp; Skills
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center auto-rows-fr">
          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 shadow-sm hover:shadow-md transition-shadow ring-1 ring-base-300/60">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <CodeBracketIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Front End</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  JavaScript
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  TypeScript
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  React
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Next.js
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Redux
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  HTML5
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Webpack/Vite
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 shadow-sm hover:shadow-md transition-shadow ring-1 ring-base-300/60">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-purple-500/15 flex items-center justify-center">
                  <ServerStackIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Back End</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  NodeJS
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Express
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Nest.js
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  RESTful API
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  MongoDB
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm h-full rounded-2xl bg-base-100 shadow-sm hover:shadow-md transition-shadow ring-1 ring-base-300/60">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-base-content">Others</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Jest
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Docker
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  CI/CD
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Git
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Agile/Scrum
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Figma
                </span>
                <span className="badge badge-sm bg-base-200 text-base-content/80 border-0">
                  Power Platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
