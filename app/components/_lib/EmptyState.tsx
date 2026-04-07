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
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function ActionButton({ action }: { action: EmptyStateAction }) {
  const isPrimary = action.variant !== "secondary";
  const className = [
    baseButtonStyles,
    isPrimary
      ? "bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:outline-primary"
      : "border border-base-300 bg-base-100 text-base-content/70 hover:bg-base-200 focus-visible:outline-base-300",
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
    <div className="flex items-center justify-center rounded-2xl border border-base-300 bg-base-100 px-6 py-12 text-center shadow-sm">
      <div className="max-w-lg space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-base-300 bg-base-200 text-base-content/40">
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
          <p className="text-xl font-semibold text-base-content">
            {title}
          </p>
          <p className="text-sm leading-relaxed text-base-content/50">
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
