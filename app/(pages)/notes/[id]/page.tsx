import Warning from "@/app/components/_lib/Warning";
import BackToTop from "@/app/components/_lib/BackToTop";
import Breadcrumbs from "@/app/components/_lib/Breadcrumbs";
import Actions from "@/app/components/_lib/Actions";
import Tag from "@/app/components/_lib/Tag";
import RelevantPosts from "../../../components/_lib/RelevantPosts";
import LightboxImage from "@/app/components/_lib/LightboxImage";
import { PostData } from "@/app/lib/types";
import { formatShortDate } from "@/app/lib/date";
import axios from "axios";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  // read route params
  const id = params.id;
  // fetch data
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/post/metadata/${id}`,
  );

  return {
    title: res.data.title,
    description: `Siran.dev - Note title: ${res.data.title}`,
  };
}

async function getRelevantPosts(tags: { id: string; name: string }[]) {
  const params: string = tags.map((item) => item.name).toString();
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/post/guess/?tags=${params}`,
  );

  if (res.status !== 200) {
    return null;
  }

  return res.data;
}

async function getData(id: string) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/post/${id}`);
  if (res.status !== 200) {
    return null;
  }

  return res.data;
}
function selectTheme(index: number) {
  let val: string = "";
  switch (index) {
    case 0:
      val = "info";
      break;
    case 1:
      val = "warning";
      break;
    case 2:
      val = "success";
      break;
    case 3:
      val = "error";
      break;
    default:
      val = "accent";
      break;
  }
  return val;
}

export default async function Note({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  if (!data) {
    return <Warning msg={"No data can be found, please try again"} />;
  }

  const content: PostData = JSON.parse(data.content);
  const relevantPosts = await getRelevantPosts(data.categories);

  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="notes" currentRoute={content.title} />

      {/* Intoduction section */}
      <section className="mb-16">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
            <span>{formatShortDate(data.createdAt)}</span>
            {data?.readTime && (
              <>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span className="inline-flex items-center gap-1">
                  {data.readTime}
                  <span className="text-gray-400/80 dark:text-gray-500/80">
                    read
                  </span>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="mt-4">
          {data?.categories.length > 0 &&
            data.categories.map(
              (tag: { id: string; name: string }, index: number) => (
                <Tag
                  key={index}
                  id={tag.id}
                  name={tag.name}
                  color={selectTheme(index)}
                />
              ),
            )}
        </div>
        {/* Head description */}
        <div className="pt-6 space-y-2">
          {content.info.split("\n").map((line: string, index: number) =>
            line ? (
              <p
                key={index}
                className="text-base leading-loose text-gray-600 dark:text-gray-300"
              >
                {line}
              </p>
            ) : (
              <br key={index} />
            ),
          )}
        </div>
      </section>

      {/* Image section */}
      <section className="flex gap-4 flex-col items-center mb-16">
        {content.primaryImgUrl && (
          <LightboxImage
            src={content.primaryImgUrl}
            alt="primary-img"
            width={500}
            height={400}
            className="rounded-xl shadow-lg ring-1 ring-black/5 transition-shadow group-hover:shadow-xl dark:ring-white/10"
          />
        )}
      </section>

      {/* Subtitle section */}
      {content.mainText && (
        <section className="mb-16">
          <p className="text-2xl mb-4 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {content.subtitle}
          </p>
          {content.mainText.split("\n").map((line: string, index: number) =>
            line ? (
              <p
                key={index}
                className="text-base leading-loose text-gray-700 dark:text-gray-300"
              >
                {line}
              </p>
            ) : (
              <br key={index} />
            ),
          )}
        </section>
      )}

      {/* Image section */}
      <section className="flex gap-4 flex-col items-center mb-16">
        {content.secondaryImgUrl && (
          <LightboxImage
            src={content.secondaryImgUrl}
            alt="secondary-img"
            width={500}
            height={400}
            className="rounded-xl shadow-lg ring-1 ring-black/5 transition-shadow group-hover:shadow-xl dark:ring-white/10"
          />
        )}
      </section>

      {/* video section */}
      {content.videoUrl && (
        <section className="mb-16">
          <p className="text-2xl mb-4 font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Video
          </p>
          <iframe
            src={content.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"
          ></iframe>
        </section>
      )}

      {/* URL info section */}
      <section className="mb-16">
        <div className="rounded-xl border border-gray-200/70 bg-gray-50/60 p-6 dark:border-gray-700/60 dark:bg-gray-900/40">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
            resource info
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {content.primaryLink}
                {": "}
              </span>
              <a
                className="text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
                href={content.primaryUrl}
                target="_blank"
              >
                {content.primaryUrl}
              </a>
            </div>
            {content.secondaryLink && (
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {content.secondaryLink}
                  {": "}
                </span>
                <a
                  className="text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
                  href={content.secondaryUrl}
                  target="_blank"
                >
                  {content.secondaryUrl}
                </a>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Page URL{": "}
              </span>
              <a
                className="text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400"
                href={`${process.env.NEXT_PUBLIC_URL as string}/notes/${
                  params.id
                }/`}
                target="_blank"
              >{`${process.env.NEXT_PUBLIC_URL as string}notes/${
                params.id
              }/`}</a>
            </div>
          </div>
        </div>
      </section>

      {/* You might also like */}
      {relevantPosts && relevantPosts.length > 0 && (
        <section className="mb-16">
          <div className="rounded-2xl border border-gray-200/70 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm dark:border-gray-700/60 dark:from-gray-900/40 dark:to-gray-900/10">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
                More to explore
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                You might also like...
              </p>
            </div>
            <div className="mt-6">
              <RelevantPosts posts={relevantPosts} />
            </div>
          </div>
        </section>
      )}

      {/* good to know */}
      <section className="mb-10">
        <div className="m-auto w-full flex flex-col gap-2 rounded-xl border border-gray-200/70 bg-gray-100/70 py-4 px-8 text-gray-600 dark:border-gray-700/60 dark:bg-gray-900/60 dark:text-gray-400">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="italic text-sm leading-relaxed">
              Good to know:
            </span>
          </div>
          <ul className="mt-2 text-sm italic leading-loose">
            <li>
              1. Please retain the original link for reference, thank you!
            </li>
            <li>
              2. All resources are collected from the Internet and are used for
              study purposes only.
            </li>
            <li>3. Please do not use for commercial purposes.</li>
            <li>4. Any question please contact: siranchao@gmail.com</li>
          </ul>
        </div>
      </section>

      {/* user interation */}
      <Actions
        postId={data.id}
        updatedAt={data.updatedAt}
        favoritedBy={data.favoritedBy}
      />

      <BackToTop />
    </main>
  );
}
