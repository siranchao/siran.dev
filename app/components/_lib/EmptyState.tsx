"use client";

import Link from "next/link";

type EmptyStateAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

type EmptyStateProps = {
  title: string;
  description: string;
  primaryAction?: EmptyStateAction;
  secondaryAction?: EmptyStateAction;
};

const baseButtonStyles =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function ActionButton({ action }: { action: EmptyStateAction }) {
  const isPrimary = action.variant !== "secondary";
  const className = [
    baseButtonStyles,
    isPrimary
      ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline-indigo-400"
      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
  ].join(" ");

  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={action.onClick}>
      {action.label}
    </button>
  );
}

export default function EmptyState({
  title,
  description,
  primaryAction,
  secondaryAction,
}: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center rounded-3xl border border-slate-200/80 bg-white/95 px-6 py-10 text-center shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80">
      <div className="max-w-lg space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="6.5" />
            <line x1="16" y1="16" x2="20" y2="20" />
            <line x1="9" y1="9" x2="13" y2="13" />
            <line x1="13" y1="9" x2="9" y2="13" />
          </svg>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            {title}
          </p>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300">
            {description}
          </p>
        </div>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {primaryAction && <ActionButton action={primaryAction} />}
            {secondaryAction && (
              <ActionButton
                action={{ ...secondaryAction, variant: "secondary" }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
