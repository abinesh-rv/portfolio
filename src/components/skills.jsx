import React from 'react'
import skillsData from "../data/skillsElements"

function Skills({skillsRef}) {
  return (
    <div ref={skillsRef} className='my-20'>
         <div className="capitalize text-[50px] w-fit mx-auto font-bold mb-10 text-white">skills</div>
         <div className="flex flex-wrap gap-10 justify-around ">
            {skillsData.map((e) => {
                return(
                <div className="space-y-2">
                  <img src={e.img} className='w-16 h-16'/>
                  <div className='text-cyan-400 text-center'>{e.name}</div>
                </div>
            )})}
         </div>
    </div>
  )
}

export default Skills