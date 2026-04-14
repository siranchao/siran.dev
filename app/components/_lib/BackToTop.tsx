"use client";
import React, { useState, useEffect } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the user has scrolled enough to show the button
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 500); // Adjust this value based on when you want the button to appear
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed z-10 bottom-6 right-6 flex w-9 h-9 justify-center items-center bg-base-100 transition-all duration-300 cursor-pointer rounded-xl border border-base-300 shadow-sm hover:shadow-md hover:bg-base-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="w-4 h-4 text-base-content/60" />
    </div>
  );
}
