import Intro from "./components/Intro";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import BackToTop from "./components/BackToTop";
import Notes from "./components/Notes";
import AboutMe from "./components/AboutMe";
import ScrollToBottomOnLoad from "./components/ScrollToBottomOnLoad";
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
