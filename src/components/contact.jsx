import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact({contactRef}) {

  const form  =useRef()

  const handleMail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_8qnqvj8', 'template_iw7wrh2', form.current, 'ldTx6esFKdNqM1vqb')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.from_name.value=""
    e.target.from_email.value=""
    e.target.message.value=""
    form.current=""
  }

  return (
    <div ref={contactRef}  className='mt-32 text-white pb-10'>
    <div className="capitalize text-[50px] w-fit mx-auto font-bold mb-10 ">contact</div>
    <div className=" p-4 w-full mx-auto border-2 items-center rounded-md justify-around md:justify-center gap-4 border-cyan-500 mt-10 flex flex-col md:flex-row ">
        <div className=' md:w-[40%] w-full  space-y-6 text-center md:text-left'>
           <div>
           <div className='text-2xl'>Phone</div>
           <div className='md:pl-5 '>+91 98438 10922</div>
           </div>
           <div>
           <div className='text-2xl'>Email</div>
           <div className='md:pl-5'>abineshravi24@gmail.com</div>
           </div>
           <div>
           <div className='text-2xl'>Address</div>
           <div className='md:pl-5'>Erode, Tamil Nadu</div>
           </div>
        </div>
        <form ref={form} className='md:w-[40%] w-full' onSubmit={(e) => handleMail(e)} >
        <div className='uppercase text-center md:text-left text-2xl my-5'>get in touch</div>
        <div className='space-y-6'>
        <div class="relative z-0">
        <input type="text" required name="from_name" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-cyan-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none   focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label for="floating_standard" class="absolute text-sm text-cyan-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div class="relative z-0">
        <input type="text"  required name="from_email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-cyan-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none   focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label for="floating_standard" class="absolute text-sm text-cyan-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>
        <div class="relative z-0">
        <textarea type="text"  required name="message" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-cyan-500 bg-transparent border-0 border-b-2 border-cyan-500 appearance-none   focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
        <label for="floating_standard" class="absolute text-sm text-cyan-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
        </div>
        <button type='submit' className='btn-one text-center text-cyan-500 hover:text-white'>submit</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Contact