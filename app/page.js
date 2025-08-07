'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certification from "@/components/Certification";

export default function Home() {

  return (
    <>
    <Navbar/>
    <Header />
    <About />
    <Education/>
    <Skills/>
    <Certification/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}
