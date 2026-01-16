"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToBottomOnLoad() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scroll") !== "about") return;

    // Wait for layout/paint to ensure document height is correct.
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

      // Clean the URL without triggering a navigation (avoids scroll reset).
      window.history.replaceState(null, "", "/");
    });
  }, [searchParams]);

  return null;
}

