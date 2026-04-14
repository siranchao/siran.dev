import "./globals.css";
import { Manrope, Instrument_Serif } from "next/font/google";
import Header from "./components/_section/Header";
import Footer from "./components/_section/Footer";
import Providers from "./components/_helper/Providers";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siran.dev",
  description: "The profolio site of Siran.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${instrumentSerif.variable} font-body min-h-screen bg-base-200 text-base-content`}
      >
        <Providers>
          <div className="flex flex-col min-h-screen w-full px-6 sm:px-12 md:px-24 lg:px-48 xl:w-[1250px] xl:mx-auto">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
