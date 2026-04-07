"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="toggle Dark mode"
      type="button"
      className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-base-300/80 transition-colors duration-200 mr-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="w-[18px] h-[18px] text-base-content/60" />
      ) : (
        <MoonIcon className="w-[18px] h-[18px] text-base-content/60" />
      )}
    </button>
  );
}
