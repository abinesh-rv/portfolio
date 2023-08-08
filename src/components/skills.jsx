import React from 'react'
import skillsData from "../data/skillsElements"

function Skills({skillsRef}) {
  return (
    <div ref={skillsRef} className='my-20'>
         <div className="capitalize text-[50px] w-fit mx-auto font-bold mb-10 text-white">skills</div>
         <div className="flex flex-wrap gap-10 justify-around ">
            {skillsData.map((e) => {
                return(
                <div className='rounded-md p-5 border-2 border-cyan-400 transition-colors duration-300 ease-in-out cursor-pointer hover:border-white'>
                  <img src={e} className='w-16 h-16'/>
                </div>
            )})}
         </div>
    </div>
  )
}

export default Skills