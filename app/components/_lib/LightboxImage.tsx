"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function LightboxImage({
  src,
  alt,
  width,
  height,
  className,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const bodyStyle = document.body.style.overflow;
    const htmlStyle = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = bodyStyle;
      document.documentElement.style.overflow = htmlStyle;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open image"
        className="group cursor-pointer p-0"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-full max-w-full overflow-hidden rounded-lg bg-transparent"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close image"
              className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white/90 backdrop-blur hover:bg-black/70"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="block max-w-none" />
          </div>
        </div>
      )}
    </>
  );
}
