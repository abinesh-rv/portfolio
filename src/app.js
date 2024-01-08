import React, { useEffect, useRef } from 'react'
import NavBar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Works from "./components/works"
import Contact from './components/contact'
import AOS from "aos"
import "aos/dist/aos.css";

function App()
{

   useEffect(() =>
   {
      AOS.init({ duration: 2000 });
   }, [])

   const aboutRef = useRef()
   const skillsRef = useRef()
   const worksRef = useRef()
   const contactRef = useRef()
   const heroRef = useRef()

   const handleAbout = () =>
   {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   const handleSkills = () =>
   {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   const handleWorks = () =>
   {
      worksRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   const handleContact = () =>
   {
      contactRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   const handleHero = () =>
   {
      heroRef.current?.scrollIntoView({ behavior: "smooth" })
   }

   return (
      <div className='bg-black max-w-[1400px] mx-auto'>
         <NavBar handleAbout={handleAbout} handleSkills={handleSkills} handleWorks={handleWorks} handleContact={handleContact} handleHero={handleHero} />
         <div className='mx-12 overflow-hidden'>
            <div data-aos="fade-up"><Hero heroRef={heroRef} /></div>
            <div data-aos="flip-up"><About aboutRef={aboutRef} /></div>
            <div data-aos="zoom-in"><Skills skillsRef={skillsRef} /></div>
            <div data-aos="zoom-in"><Works worksRef={worksRef} /></div>
            <div data-aos="fade-up"><Contact contactRef={contactRef} /></div>
         </div>
      </div>
   )
}

export default App