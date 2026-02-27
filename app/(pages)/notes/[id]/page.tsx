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
import { ReactNode } from "react";

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

const escapeHtml = (text: string) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const LANGUAGE_ALIAS: Record<string, string> = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  md: "markdown",
};

const normalizeLanguage = (language?: string) => {
  if (!language) return "";
  const normalized = language.toLowerCase().trim();
  return LANGUAGE_ALIAS[normalized] || normalized;
};

const LANGUAGE_KEYWORDS: Record<string, string[]> = {
  javascript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "switch",
    "case",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "new",
    "class",
    "extends",
    "import",
    "from",
    "export",
    "default",
    "async",
    "await",
    "typeof",
    "instanceof",
  ],
  typescript: [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "switch",
    "case",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "new",
    "class",
    "extends",
    "import",
    "from",
    "export",
    "default",
    "async",
    "await",
    "interface",
    "type",
    "implements",
    "readonly",
    "public",
    "private",
    "protected",
  ],
  json: ["true", "false", "null"],
  bash: [
    "if",
    "then",
    "else",
    "fi",
    "for",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "in",
    "while",
    "until",
  ],
  python: [
    "def",
    "class",
    "return",
    "if",
    "elif",
    "else",
    "for",
    "while",
    "try",
    "except",
    "finally",
    "import",
    "from",
    "as",
    "with",
    "lambda",
    "yield",
  ],
  sql: [
    "select",
    "from",
    "where",
    "and",
    "or",
    "order",
    "by",
    "group",
    "having",
    "insert",
    "into",
    "update",
    "delete",
    "join",
    "left",
    "right",
    "inner",
    "outer",
    "on",
    "limit",
  ],
};

const SUPPORTED_LANGUAGES = new Set(Object.keys(LANGUAGE_KEYWORDS));

const detectLanguage = (code: string) => {
  if (/^\s*[{[]/.test(code) && /"\s*:/.test(code)) return "json";
  if (/^\s*(SELECT|INSERT|UPDATE|DELETE)\b/i.test(code)) return "sql";
  if (/^\s*#!/.test(code) || /\b(echo|npm|yarn|pnpm)\b/.test(code))
    return "bash";
  if (/\b(def|import|from)\b/.test(code) && /:\s*$/.test(code.split("\n")[0]))
    return "python";
  if (/\b(interface|type|implements)\b/.test(code)) return "typescript";
  if (/\b(const|let|function|=>|import|export)\b/.test(code))
    return "javascript";
  return "text";
};

const highlightCode = (rawCode: string, language?: string) => {
  const code = rawCode.trim();
  const normalizedLanguage = normalizeLanguage(language);
  const resolvedLanguage =
    normalizedLanguage &&
    (SUPPORTED_LANGUAGES.has(normalizedLanguage) ||
      normalizedLanguage === "text")
      ? normalizedLanguage
      : detectLanguage(code);

  let highlighted = escapeHtml(code);
  const placeholders: string[] = [];
  const reserve = (value: string, className: string) => {
    const key = `@@TOKEN_${placeholders.length}@@`;
    placeholders.push(`<span class="${className}">${value}</span>`);
    return key;
  };

  highlighted = highlighted.replace(
    /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#[^\n]*)/g,
    (match) => reserve(match, "hljs-comment"),
  );
  highlighted = highlighted.replace(
    /(&quot;(?:\\.|[^&])*?&quot;|&#39;(?:\\.|[^&])*?&#39;|`(?:\\.|[^`])*?`)/g,
    (match) => reserve(match, "hljs-string"),
  );
  highlighted = highlighted.replace(/\b\d+(?:\.\d+)?\b/g, (match) =>
    reserve(match, "hljs-number"),
  );
  highlighted = highlighted.replace(
    /\b(true|false|null|undefined)\b/g,
    (match) => reserve(match, "hljs-literal"),
  );

  const keywords = LANGUAGE_KEYWORDS[resolvedLanguage] || [];
  if (keywords.length > 0) {
    const keywordRegex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    highlighted = highlighted.replace(keywordRegex, (match) =>
      reserve(match, "hljs-keyword"),
    );
  }

  if (
    resolvedLanguage === "javascript" ||
    resolvedLanguage === "typescript" ||
    resolvedLanguage === "python"
  ) {
    highlighted = highlighted.replace(
      /\b([A-Za-z_$][\w$]*)(?=\s*\()/g,
      (match) => reserve(match, "hljs-title"),
    );
  }

  highlighted = highlighted.replace(
    /@@TOKEN_(\d+)@@/g,
    (_match, index: string) => placeholders[Number(index)] || "",
  );

  const highlightedByLine = highlighted
    .split("\n")
    .map(
      (line) =>
        `<span class="code-line">${line.length > 0 ? line : "&nbsp;"}</span>`,
    )
    .join("");

  return {
    html: highlightedByLine,
    language: resolvedLanguage,
  };
};

const renderInlineMarkdown = (text: string) => {
  return escapeHtml(text)
    .replace(
      /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g,
      (_match, alt: string, url: string, title: string) => {
        const resolvedUrl = normalizeAssetUrl(url);
        const altText = alt || "markdown-image";
        const titleText = title || "";

        if (isEmbeddableVideo(resolvedUrl)) {
          return `<span class="my-3 block"><iframe src="${escapeHtml(resolvedUrl)}" title="${escapeHtml(titleText || altText)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"></iframe></span>`;
        }

        if (isVideoAsset(resolvedUrl)) {
          return `<span class="my-3 block"><video controls preload="metadata" class="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"><source src="${escapeHtml(resolvedUrl)}" />Your browser does not support the video tag.</video></span>`;
        }

        const captionHtml = titleText
          ? `<span class="mt-2 block text-center text-xs text-gray-500 dark:text-gray-400">${escapeHtml(titleText)}</span>`
          : "";
        return `<span class="my-3 block"><img src="${escapeHtml(resolvedUrl)}" alt="${escapeHtml(altText)}" loading="lazy" referrerpolicy="no-referrer" class="m-auto rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10" />${captionHtml}</span>`;
      },
    )
    .replace(
      /\[([^\]]+)\]\(((?:https?:\/\/|\/\/)[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer" class="text-blue-600 hover:text-blue-500 hover:underline dark:text-blue-400">$1</a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(
      /`([^`]+)`/g,
      '<code class="rounded-md border border-gray-200/70 bg-gray-100/80 px-1.5 py-0.5 text-[0.85em] font-medium text-gray-700 dark:border-gray-700/80 dark:bg-gray-800/70 dark:text-gray-200">$1</code>',
    );
};

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

const renderMarkdownToHtml = (markdown: string) => {
  const unifiedBodyStyle =
    "font-size:14px; margin-bottom:16px; letter-spacing:0.03em;";
  const normalized = markdown.replace(/\r\n/g, "\n").trim();
  if (!normalized) {
    return "<p>No markdown content.</p>";
  }

  const codeBlocks: string[] = [];
  const withPlaceholders = normalized.replace(
    /```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g,
    (_m, lang: string, code: string) => {
      const highlightedCode = highlightCode(code, lang);
      const languageLabel = `<span class="text-[11px] uppercase tracking-[0.18em] text-gray-500/90 dark:text-gray-400/90">${escapeHtml(highlightedCode.language)}</span>`;
      const blockHtml = `<pre class="md-code-block my-7 overflow-x-auto rounded-2xl border border-gray-200/80 bg-[#f8f7f4] p-4 shadow-sm dark:border-gray-700/80 dark:bg-[#161b22]"><div class="flex items-center justify-between border-b border-gray-200/80 px-4 py-2 dark:border-gray-700/80">${languageLabel}</div><code class="hljs language-${escapeHtml(highlightedCode.language)} block p-4 text-[0.86rem] leading-5">${highlightedCode.html}</code></pre>`;
      const index = codeBlocks.push(blockHtml) - 1;
      return `\n@@CODEBLOCK_${index}@@\n`;
    },
  );

  const blocks = withPlaceholders.split(/\n{2,}/);
  const htmlBlocks = blocks
    .map((rawBlock) => {
      const block = rawBlock.trim();
      if (!block) {
        return "";
      }

      const codeMatch = block.match(/^@@CODEBLOCK_(\d+)@@$/);
      if (codeMatch) {
        return codeBlocks[Number(codeMatch[1])] || "";
      }

      const headingMatch = block.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = renderInlineMarkdown(headingMatch[2]);
        const headingHtml = `<h${level} class="scroll-mt-24" style="font-weight:700;">${text}</h${level}><br />`;
        if (level === 1 || level === 2) {
          return `${headingHtml}<hr style="margin: 0 0 20px; border: 0; border-top: 1px solid rgba(148, 163, 184, 0.45);" />`;
        }
        return headingHtml;
      }

      const imageMatch = block.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)$/);
      if (imageMatch) {
        const altText = imageMatch[1] || "markdown-image";
        const resolvedUrl = normalizeAssetUrl(imageMatch[2]);
        const titleText = imageMatch[3] || "";

        if (isEmbeddableVideo(resolvedUrl)) {
          return `<div class="my-8"><iframe src="${escapeHtml(resolvedUrl)}" title="${escapeHtml(titleText || altText)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"></iframe></div>`;
        }

        if (isVideoAsset(resolvedUrl)) {
          return `<div class="my-8"><video controls preload="metadata" class="m-auto rounded-lg shadow-xl aspect-video w-full md:w-4/5 lg:w-3/4"><source src="${escapeHtml(resolvedUrl)}" />Your browser does not support the video tag.</video></div>`;
        }

        const captionHtml = titleText
          ? `<figcaption class="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">${escapeHtml(titleText)}</figcaption>`
          : "";
        return `<figure class="my-8"><img src="${escapeHtml(resolvedUrl)}" alt="${escapeHtml(altText)}" loading="lazy" referrerpolicy="no-referrer" class="m-auto rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10" />${captionHtml}</figure>`;
      }

      const lines = block.split("\n");
      const isUnorderedList = lines.every((line) =>
        /^[-*]\s+/.test(line.trim()),
      );
      if (isUnorderedList) {
        const items = lines
          .map((line) => line.replace(/^[-*]\s+/, ""))
          .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
          .join("");
        return `<ul style="${unifiedBodyStyle}">${items}</ul>`;
      }

      const isOrderedList = lines.every((line) =>
        /^\d+\.\s+/.test(line.trim()),
      );
      if (isOrderedList) {
        const items = lines
          .map((line) => line.replace(/^\d+\.\s+/, ""))
          .map((line) => `<li>${renderInlineMarkdown(line)}</li>`)
          .join("");
        return `<ol style="${unifiedBodyStyle}">${items}</ol>`;
      }

      const isBlockquote = lines.every((line) => /^>\s?/.test(line.trim()));
      if (isBlockquote) {
        const quote = lines
          .map((line) => line.replace(/^>\s?/, ""))
          .map((line) => renderInlineMarkdown(line))
          .join("<br />");
        return `<blockquote style="${unifiedBodyStyle}">${quote}</blockquote>`;
      }

      return `<p style="${unifiedBodyStyle}">${lines.map((line) => renderInlineMarkdown(line)).join("<br />")}</p>`;
    })
    .filter(Boolean)
    .join("");

  return htmlBlocks;
};

export default async function Note({ params }: { params: { id: string } }) {
  const data = await getData(params.id);

  if (!data) {
    return <Warning msg={"No data can be found, please try again"} />;
  }

  const content: PostData = JSON.parse(data.content);
  const isMarkdownPost = Boolean(data.isMarkdown);
  const markdownHtml = renderMarkdownToHtml(content.markdownContent || "");
  const relevantPosts = await getRelevantPosts(data.categories);

  return (
    <main className="mb-20">
      <Breadcrumbs prevRoute="notes" currentRoute={content.title} />

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
            <div
              className="prose prose-sm md:prose-base prose-zinc max-w-none prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-[0.97rem] prose-p:leading-8 prose-li:text-[0.97rem] prose-li:leading-8 prose-li:my-1.5 prose-strong:text-gray-900 prose-a:decoration-1 prose-a:underline-offset-4 prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-invert dark:prose-headings:text-gray-100 dark:prose-strong:text-gray-100 dark:prose-blockquote:border-gray-600 dark:prose-blockquote:text-gray-300 [&_.code-line]:-mx-1 [&_.code-line]:block [&_.code-line]:rounded-sm [&_.code-line]:border-l-2 [&_.code-line]:border-l-transparent [&_.code-line]:px-1 [&_.hljs-comment]:text-[#64748b] [&_.hljs-quote]:text-[#64748b] [&_.hljs-keyword]:text-[#7c3aed] [&_.hljs-selector-tag]:text-[#7c3aed] [&_.hljs-built_in]:text-[#0369a1] [&_.hljs-type]:text-[#0369a1] [&_.hljs-title]:text-[#1d4ed8] [&_.hljs-function_.hljs-title]:text-[#1d4ed8] [&_.hljs-string]:text-[#0f766e] [&_.hljs-symbol]:text-[#0f766e] [&_.hljs-number]:text-[#c2410c] [&_.hljs-literal]:text-[#c2410c] [&_.hljs-variable]:text-[#be185d] [&_.hljs-template-variable]:text-[#be185d] [&_.hljs-attr]:text-[#0891b2] dark:[&_.hljs-keyword]:text-[#d8b4fe] dark:[&_.hljs-selector-tag]:text-[#d8b4fe] dark:[&_.hljs-built_in]:text-[#7dd3fc] dark:[&_.hljs-type]:text-[#7dd3fc] dark:[&_.hljs-title]:text-[#93c5fd] dark:[&_.hljs-function_.hljs-title]:text-[#93c5fd] dark:[&_.hljs-string]:text-[#5eead4] dark:[&_.hljs-symbol]:text-[#5eead4] dark:[&_.hljs-number]:text-[#fdba74] dark:[&_.hljs-literal]:text-[#fdba74] dark:[&_.hljs-variable]:text-[#f9a8d4] dark:[&_.hljs-template-variable]:text-[#f9a8d4] dark:[&_.hljs-attr]:text-[#67e8f9]"
              dangerouslySetInnerHTML={{ __html: markdownHtml }}
            />
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
