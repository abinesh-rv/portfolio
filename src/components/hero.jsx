import React, { useEffect } from 'react'
import profileImage from "../assets/profile.jpg"
import {BsInstagram,BsGithub,BsWhatsapp} from "react-icons/bs"
import {BiLogoLinkedin,BiDownload} from "react-icons/bi"
import CV from "../assets/ABINESH_PERSONAL.pdf"


function Hero({heroRef}) {

  return (
    <div ref={heroRef}   className=' flex flex-col gap-20 pt-28 justify-center mt-18 items-center md1:h-[100vh] text-white md1:flex-row-reverse'>
    
            <div className='profile_box'>
               <div className='profile_content'><img src={profileImage} className='profile_img'/></div> 
            </div>

            <div className='flex gap-5 flex-col items-center  justify-center'>
                <div className='text-cyan-500 text-3xl pl-4 self-start'>I'm</div>
                <div className='profile_name text-[70px] md:text-[100px]'>abinesh</div>
                <div className='text-4xl tracking-wider text-center'><span className='text-cyan-500'>S</span>oftware <span className='text-cyan-500'>D</span>evloper</div>
                <div className='flex gap-4 justify-evenly mt-4'>
                    <a href="https://www.instagram.com/abi_lancer_24/" target="_blank" rel="noreferrer noopener" ><div className='social-icons'><BsInstagram/></div></a>
                    <a href="https://www.linkedin.com/in/abineshr24" target="_blank" rel="noreferrer noopener" ><div className='social-icons'><BiLogoLinkedin/></div></a>
                    <a href="https://github.com/abinesh-rv" target="_blank" rel="noreferrer noopener" ><div className='social-icons'><BsGithub/></div></a>
                    <a href="https://wa.me/919843810922" target="_blank" rel="noreferrer noopener" ><div className='social-icons'><BsWhatsapp/></div></a>  
                </div>
                <div className='btn-one text-cyan-500 hover:text-white flex gap-2 w-fit items-center self-center text-3xl p-3'><span className=""><BiDownload/></span><a href={CV} target="_blank" rel="noreferrer noopener" className='tracking-widest normal-case'>Download CV</a></div>
            </div>

           
    </div>
  )
}

export default Hero