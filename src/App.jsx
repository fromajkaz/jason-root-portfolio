import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import NavNav from "./components/NavNav";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
   <>
    <BlurBackground/>
    <NavNav/>
    <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <NavNav/>
      <Hero/>
      <Projects/>
      <About/>
      <Experience/>
      <Testimonials/>
      <Contacts/>
    </main>
   </>
  )
}