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
import { cache } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props) {
  const data = await getData(params.id);

  return {
    title: data?.title ?? "Note",
    description: data ? `Siran.dev - Note title: ${data.title}` : "Siran.dev",
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

const getData = cache(async function getData(id: string) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/post/${id}`);
  if (res.status !== 200) {
    return null;
  }

  return res.data;
});
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

const normalizeAssetUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url;
};

const isVideoAsset = (url: string) => {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
};

const isEmbeddableVideo = (url: string) => {
  return /(?:youtube\.com\/embed\/|player\.vimeo\.com\/video\/)/i.test(url);
};

const markdownComponents = {
  h1: ({ children, ...props }: any) => (
    <h1
      className="mt-8 mb-4 scroll-mt-24 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="mt-8 mb-3 scroll-mt-24 border-b border-gray-200/80 pb-2 text-xl font-semibold tracking-tight text-gray-900 dark:border-gray-700/70 dark:text-gray-100 md:text-2xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="mt-7 mb-2.5 scroll-mt-24 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-xl"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4
      className="mt-6 mb-2.5 scroll-mt-24 text-base font-semibold tracking-tight text-gray-900 dark:text-gray-100 md:text-lg"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: any) => (
    <p
      className="my-3 text-[0.92rem] leading-7 text-gray-700 dark:text-gray-300 md:text-[0.94rem]"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul
      className="my-4 list-disc space-y-1.5 pl-5 text-[0.92rem] leading-7 text-gray-700 marker:text-gray-400 dark:text-gray-300 dark:marker:text-gray-500 md:text-[0.94rem]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol
      className="my-4 list-decimal space-y-1.5 pl-5 text-[0.92rem] leading-7 text-gray-700 marker:text-gray-500 dark:text-gray-300 dark:marker:text-gray-400 md:text-[0.94rem]"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="my-5 rounded-r-xl border-l-4 border-gray-300 bg-gray-50/70 py-2 pl-4 pr-4 italic text-[0.92rem] leading-7 text-gray-600 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-300 md:text-[0.94rem]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props: any) => (
    <hr
      className="my-8 border-0 border-t border-gray-200/80 dark:border-gray-700/70"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-blue-600 decoration-blue-400/70 underline underline-offset-4 transition-colors hover:text-blue-500 dark:text-blue-400 dark:decoration-blue-500/60 dark:hover:text-blue-300"
      {...props}
    >
      {children}
    </a>
  ),
  pre: ({ children }: any) => <>{children}</>,
  code: ({ className, children, ...props }: any) => {
    const languageMatch = /language-([\w-]+)/.exec(className || "");
    const language = languageMatch?.[1] || "";
    const isCodeBlock = Boolean(languageMatch);

    if (!isCodeBlock) {
      return (
        <code
          className="rounded-md border border-gray-200/70 bg-gray-100/80 px-1.5 py-0.5 font-mono text-[0.82em] text-gray-700 dark:border-gray-700/70 dark:bg-gray-800/70 dark:text-gray-200"
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <div className="group relative my-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-[#fafaf9] shadow-sm dark:border-gray-700/80 dark:bg-[#282c34]">
        <div className="flex items-center justify-between border-b border-gray-200/80 bg-gray-50/80 px-4 py-2.5 dark:border-gray-700/80 dark:bg-[#21252b]">
          <span className="select-none text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500/90 dark:text-gray-400/90">
            {language}
          </span>
        </div>
        <pre className="overflow-x-auto p-4">
          <code
            className={`hljs block font-mono text-[0.8rem] leading-[1.75] ${className || ""}`}
            {...props}
          >
            {children}
          </code>
        </pre>
      </div>
    );
  },
  table: ({ children, ...props }: any) => (
    <div className="my-5 overflow-x-auto rounded-xl border border-gray-200/80 dark:border-gray-700/80">
      <table
        className="min-w-full border-collapse text-left text-[0.9rem] md:text-[0.92rem]"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-gray-100/80 dark:bg-gray-800/80" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="border-b border-gray-200/80 px-4 py-2.5 font-semibold text-gray-800 dark:border-gray-700/80 dark:text-gray-100"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td
      className="border-b border-gray-100 px-4 py-2.5 align-top text-gray-700 dark:border-gray-800 dark:text-gray-300"
      {...props}
    >
      {children}
    </td>
  ),
  img: ({ src, alt, title, ...props }: any) => {
    const resolvedSrc = normalizeAssetUrl(src || "");

    if (isEmbeddableVideo(resolvedSrc)) {
      return (
        <div className="my-8">
          <iframe
            src={resolvedSrc}
            title={title || alt || "embedded-video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="m-auto aspect-video w-full rounded-lg shadow-xl md:w-4/5 lg:w-3/4"
          />
        </div>
      );
    }

    if (isVideoAsset(resolvedSrc)) {
      return (
        <div className="my-8">
          <video
            controls
            preload="metadata"
            className="m-auto aspect-video w-full rounded-lg shadow-xl md:w-4/5 lg:w-3/4"
          >
            <source src={resolvedSrc} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    return (
      <figure className="my-8">
        <img
          src={resolvedSrc}
          alt={alt || "markdown-image"}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="m-auto rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          {...props}
        />
        {title ? (
          <figcaption className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
            {title}
          </figcaption>
        ) : null}
      </figure>
    );
  },
};

export default async function Note({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  if (!data) {
    return <Warning msg={"No data can be found, please try again"} />;
  }

  const content: PostData = JSON.parse(data.content);
  const isMarkdownPost = Boolean(data.isMarkdown);
  const markdownContent = content.markdownContent?.trim() || "";
  const relevantPosts = await getRelevantPosts(data.categories);

  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="notes" currentRoute={content.title} />

      {/* Markdown post section */}
      {isMarkdownPost && (
        <section className="mb-16">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
              <span>{formatShortDate(data.createdAt)}</span>
              {typeof data?.readingTime === "number" && (
                <>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <span className="inline-flex items-center gap-1">
                    {data.readingTime} min
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
          <article className="mt-8 rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white to-gray-50/50 p-6 shadow-sm dark:border-gray-700/60 dark:from-gray-900/30 dark:to-gray-900/10 md:p-8">
            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={markdownComponents}
              >
                {markdownContent || "No markdown content."}
              </ReactMarkdown>
            </div>
          </article>
        </section>
      )}

      {/* Intoduction section */}
      {!isMarkdownPost && (
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
      )}

      {/* Image section */}
      {!isMarkdownPost && (
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
      )}

      {/* Subtitle section */}
      {!isMarkdownPost && content.mainText && (
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
      {!isMarkdownPost && (
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
      )}

      {/* video section */}
      {!isMarkdownPost && content.videoUrl && (
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
      {!isMarkdownPost && (
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
      )}

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
