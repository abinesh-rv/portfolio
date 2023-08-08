import React from 'react'
import TaxbeeLogo from "../assets/taxbee.jpg"
import techStack from '../data/techStack'
import chatAppLogo from "../assets/rv-chat.avif"
import expenseLogo from "../assets/expense-tracker.jpg"
import todoLogo from "../assets/todo.png"


function Works({worksRef}) {
  return (
    <div ref={worksRef} className='pt-10 text-white'>
         <div className="capitalize text-[50px] w-fit mx-auto font-bold mb-10 text-white">my works</div>
    <div className='flex justify-around flex-wrap gap-3'>

         <div className='flex border-2 flex-col w-[300px] rounded-md gap-2 border-cyan-500 overflow-hidden'>
          <div className="h-[200px] overflow-hidden"><img src={TaxbeeLogo}/></div>
          <div className="flex flex-col justify-center gap-3 p-2">
              <div className='text-center text-xl'>Taxbee</div> 
              <div className='space-y-2'>
                <div>TechStack :</div>
                <div className='flex gap-2 flex-wrap justify-center'>
                  {techStack[0].map((e) => <div className='w-fit rounded-md border-2 border-cyan-500 p-1 text-sm'>{e}</div>)}
                </div>
              </div>
              <div className='flex justify-center gap-3 uppercase'>
                <a href="https://taxbeephp.epizy.com/index.php" target="_blank" rel="noreferrer noopener"><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">visit</div></a>  
              </div>
          </div>
         </div>

         <div className='flex border-2 flex-col w-[300px] rounded-md gap-2 border-cyan-500 overflow-hidden'>
          <div className="h-[200px] overflow-hidden"><img src={chatAppLogo}/></div>
          <div className="flex flex-col justify-center gap-3 p-2">
              <div className='text-center text-xl'>Chat App</div> 
              <div className='space-y-2'>
                <div>TechStack :</div>
                <div className='flex gap-2 flex-wrap justify-center'>
                  {techStack[1].map((e) => <div className='w-fit rounded-md border-2 border-cyan-500 p-1 text-sm'>{e}</div>)}
                </div>
              </div>
              <div className='flex justify-center gap-3 uppercase'>
                <a href="https://rv-chat.netlify.app/" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">visit</div></a>
                <a href="https://github.com/abinesh-rv/chat-app" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">view source</div></a>
              </div>
          </div>
         </div>

         <div className='flex border-2 flex-col w-[300px] rounded-md gap-2 border-cyan-500 overflow-hidden'>
          <div className="h-[200px] overflow-hidden"><img src={expenseLogo}/></div>
          <div className="flex flex-col justify-center gap-3 p-2">
              <div className='text-center text-xl'>Expense Tracker</div> 
              <div className='space-y-2'>
                <div>TechStack :</div>
                <div className='flex gap-2 flex-wrap justify-center'>
                  {techStack[1].map((e) => <div className='w-fit rounded-md border-2 border-cyan-500 p-1 text-sm'>{e}</div>)}
                </div>
              </div>
              <div className='flex justify-center gap-3 uppercase'>
                <a href="https://rv-expense.netlify.app/" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">visit</div></a>  
                <a href="https://github.com/abinesh-rv/expense-tracker" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">view source</div></a>
              </div>
          </div>
         </div>

         <div className='flex border-2 flex-col w-[300px] rounded-md gap-2 border-cyan-500 overflow-hidden'>
          <div className="h-[200px] overflow-hidden"><img src={todoLogo}/></div>
          <div className="flex flex-col justify-center gap-3 p-2">
              <div className='text-center text-xl'>Todo List</div> 
              <div className='space-y-2'>
                <div>TechStack :</div>
                <div className='flex gap-2 flex-wrap justify-center'>
                  {techStack[1].map((e) => <div className='w-fit rounded-md border-2 border-cyan-500 p-1 text-sm'>{e}</div>)}
                </div>
              </div>
              <div className='flex justify-center gap-3 uppercase'>
                <a href="https://rvtodo.netlify.app/" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">visit</div> </a> 
                <a href="https://github.com/abinesh-rv/todo-list" target="_blank" rel="noreferrer noopener" ><div className="p-2 border-2 rounded-md border-cyan-500 text-cyan-500 cursor-pointer transition-colors ease-in-out duration-300 hover:text-white hover:border-white">view source</div></a>
              </div>
          </div>
         </div>

      </div>
    </div>
  )
}

export default Works