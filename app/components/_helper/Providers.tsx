"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/app/store";
import ModalProvider from "./ModalProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="light"
        enableSystem={false}
      >
        <ReduxProvider store={store}>
          <ModalProvider>{children}</ModalProvider>
        </ReduxProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
