import Intro from "./components/_section/Intro";
import Skill from "./components/_section/Skill";
import Projects from "./components/_section/Projects";
import BackToTop from "./components/_lib/BackToTop";
import Notes from "./components/_section/Notes";
import AboutMe from "./components/_section/AboutMe";
import ScrollToBottomOnLoad from "./components/_helper/ScrollToBottomOnLoad";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siran.dev | Home",
  description: "The index page of Siran.dev",
};

export default function Home() {
  return (
    <>
      <ScrollToBottomOnLoad />
      <div className="py-16 border-b border-base-300 dark:border-base-content/20">
        <Intro />
      </div>

      <div className="py-16 border-b border-base-300 dark:border-base-content/20">
        <Skill />
      </div>

      <div className="py-16 border-b border-base-300 dark:border-base-content/20">
        <Projects />
      </div>

      <div className="py-16 border-b border-base-300 dark:border-base-content/20">
        <Notes />
      </div>

      <div className="py-16">
        <AboutMe />
      </div>
      <BackToTop />
    </>
  );
}
