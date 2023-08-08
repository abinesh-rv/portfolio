import React, { useEffect } from 'react'
import {AiOutlinePhone} from "react-icons/ai"
import {IoLocationOutline} from "react-icons/io5"
import {MdDateRange} from "react-icons/md"
import {IoMailOutline} from "react-icons/io5"


function About({aboutRef}) {

  return (
    <div ref={aboutRef} data-aos="fade-up" className='pt-10'>
        <div  className="capitalize text-[50px] w-fit  mx-auto font-bold mb-10 text-white">about me</div>
        <div className=' flex flex-col lg:flex-row p-3  lg:justify-around items-center gap-4 lg:gap-0   mx-auto  rounded-md bg-cyan-400 '>

        <div className='lg:w-[45%] w-full lg:h-[70vh] space-y-5 z-10 flex flex-col justify-center'>
           <div className='text-4xl font-semibold tracking-wider'>Who am i ?</div>
           <div className='leading-8 '>A result-oriented and self-motivated B.E undergraduate, looking for a challenging career where I can implement my coding knowledge so that further enhance my skills.</div>
           <div className='text-3xl font-semibold tracking-wider'>Personal info</div>
           <div className="grid gap-3 lg:grid-cols-6">
            <div className='personal-info lg:col-span-3'><span><AiOutlinePhone size={25}/></span>+91 98438 10922</div>
            <div className='personal-info lg:col-span-3'><span><IoLocationOutline size={25}/></span>Erode, Tamil Nadu</div>
            <div className='personal-info lg:col-span-2'><span><MdDateRange size={25}/></span>24-10-2002</div>
            <div className='personal-info lg:col-span-4 lg:flex lg:justify-center'><span><IoMailOutline size={25}/></span>abineshravi24@gmail.com</div>
           </div>
        </div>
        <div className=' lg:w-[45%] w-full lg:h-[70vh] space-y-3 flex flex-col justify-center'>
           <div className='p-3  rounded-md border-2 border-black space-y-2'>
             <div className='capitalize text-3xl font-semibold tracking-wider'>education</div>
               <div>BE in Information Science and Engineering (2020-2024)</div>
               <div>CPGA : 8.88</div>
               <div className='capitalize text-end'>- kumaraguru college of technology, Coimbatore</div>
           </div>
           <div className='p-3  rounded-md border-2 border-black space-y-2'>
             <div className='capitalize text-3xl font-semibold tracking-wider'>Experience</div>
               <div className='text-xl'>Taxbee</div>
               <div>Worked as a frontend developer intern</div>
               <div className='capitalize text-end'>- Jan 2022 to May 2022</div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default About