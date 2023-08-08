import React, { useState } from 'react'
import cyanlogo from "../assets/logo-cyan.png"
import whitelogo from "../assets/logo-white.png"
import {IoReorderThree} from "react-icons/io5"
import {AiFillCloseCircle} from "react-icons/ai"

function Navbar({handleAbout,handleSkills,handleWorks,handleHero,handleContact}) {
  const [navShow,setnavShow] = useState(false)
  const navToggle = () => setnavShow(!navShow)
  return (
    <div>
    <div className='flex justify-between items-center p-5 fixed top-0 right-0 left-0 bg-black z-20'>
      <div className='px-10 cursor-pointer' onClick={handleHero}><img src={cyanlogo} onMouseOver={(e) => e.currentTarget.src=whitelogo} onMouseOut={(e) => e.currentTarget.src=cyanlogo} className='sm:w-[60px] w-[40px] h-full'/></div>
      <div className='hidden sm:flex gap-10'>
        <div className='btn-one' onClick={handleAbout}>about</div>
        <div className='btn-one' onClick={handleSkills}>skill</div>
        <div className='btn-one' onClick={handleWorks}>work</div>
        <div className='btn-one' onClick={handleContact}>contact</div>
      </div>
      <div onClick={navToggle} className='sm:hidden text-cyan-500 pr-5 cursor-pointer'><IoReorderThree size={40}/></div>
      </div>
  
      <div className={`fixed z-50 h-[100vh] sm:hidden w-[100vw] flex justify-center items-center bg-black ${navShow ? "fadeIn" : "fadeOut hidden"}`}>
      <div className='fixed top-0 left-0  pl-8 pt-8 cursor-pointer' onClick={() => {
        handleHero()
        navToggle()
      }}>
        <img src={cyanlogo} onMouseOver={(e) => e.currentTarget.src=whitelogo} onMouseOut={(e) => e.currentTarget.src=cyanlogo} className='sm:w-[60px] w-[40px] h-full'/>
      </div>
      <div onClick={navToggle} className='fixed top-0 right-0 text-cyan-500 pr-8 pt-8  cursor-pointer'><AiFillCloseCircle size={40}/></div>
      <div className='space-y-4 w-fit' onClick={navToggle}>
        <div className='btn-one' onClick={handleAbout}>about</div>
        <div className='btn-one' onClick={handleSkills}>skill</div>
        <div className='btn-one' onClick={handleWorks}>work</div>
        <div className='btn-one' onClick={handleContact}>contact</div>
      </div>
      </div>
 
  
    </div>
  
  )
}

export default Navbar