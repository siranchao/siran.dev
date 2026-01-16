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
      <div className="py-16">
        <Intro />
      </div>

      <div className="py-16">
        <Skill />
      </div>

      <div className="py-16">
        <Projects />
      </div>

      <div className="py-16">
        <Notes />
      </div>

      <div className="py-16">
        <AboutMe />
      </div>
      <BackToTop />
    </>
  );
}
