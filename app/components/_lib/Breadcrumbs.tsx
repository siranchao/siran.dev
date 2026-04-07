"use client";

import Link from "next/link";

export default function Breadcrumbs({
  prevRoute,
  currentRoute,
}: {
  prevRoute: string;
  currentRoute: string;
}) {
  return (
    <div className="text-sm breadcrumbs mb-4 overflow-x-auto text-base-content/40 font-medium [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <ul>
        <li>
          <Link href="/" className="hover:text-base-content transition-colors">Home</Link>
        </li>
        {prevRoute !== "/" && (
          <li>
            <Link href={`/${prevRoute}`} className="hover:text-base-content transition-colors">
              {prevRoute[0].toUpperCase() + prevRoute.slice(1)}
            </Link>
          </li>
        )}
        <li className="text-base-content/70">{currentRoute}</li>
      </ul>
    </div>
  );
}
