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

    window.addEventListener("scroll", handleScroll);
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
      className={`fixed z-10 bottom-5 right-5 flex w-8 h-8 justify-center items-center bg-base-200 transition-opacity cursor-pointer rounded-md border border-black hover:bg-base-300 hover:opacity-100 dark:border-gray-400 dark:bg-gray-800 dark:hover:bg-gray-600 ${isVisible ? "opacity-100" : "opacity-0"}`}
      onClick={scrollToTop}
    >
      <ArrowSmallUpIcon className="w-5 h-5" />
    </div>
  );
}
