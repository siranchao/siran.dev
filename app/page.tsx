import Intro from "./components/Intro"
import Skill from "./components/Skill"
import Projects from "./components/Projects"
import BackToTop from "./components/BackToTop"
import Notes from "./components/Notes"
import { Metadata } from 'next'


export const  metadata: Metadata = {
  title: 'Siran.dev | Home',
  description: 'The index page of Siran.dev',
}


export default function Home() {
  return (
    <>
      <Intro />
      <Skill />
      <Projects />
      <Notes />
      <BackToTop />
    </>
  )
}
