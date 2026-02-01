'use client';
import Hero from "./components/sectionComponents/Hero";
import About from "./components/sectionComponents/About";
import Testimonials from "./components/sectionComponents/Testimonials";
import Contact from "./components/sectionComponents/Contact";
import Footer from "./components/layoutComponents/Footer";
import Services from "./components/sectionComponents/Services";
import Skills from "./components/sectionComponents/Skills";

export default function Home() {
  return (
    <main>
        <Hero/>
        <About/>
        <Services/>
        <Skills/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </main>
  );
}