"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeSync() {
  const { theme } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    if (theme) {
      html.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return null;
}
