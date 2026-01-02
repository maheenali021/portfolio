"user client"
import Hom from "./components/home";
import About from "./components/about"
import Skill from "./components/skills";
import Project from "./components/project";
import Contact from "./components/contact";
import Services from "./components/services"
export default function Home() {
  return (
   
       <>
      <Hom />
      <About />
      <Services/>
      <Skill/>
      <Project/>
      <Contact/>
    </>)
}
