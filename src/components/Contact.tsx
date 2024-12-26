import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-left">Contact Me</h2>
                <p className='text-black-600 text-[18px] pt-2' data-aos="fade-left">Submit the form </p>
                <p className='text-black-600 text-[18px] pt-2' data-aos="fade-left">Let Me Know </p>
                <div className='flex gap-3 items-center' data-aos="fade-left">
                    <IoMailSharp size={30} /> abk@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-left">
                    <FaPhone size={30} /> +92 3XX-XXXXXXX
                    </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="fade-left">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-left">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='email' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-left">
                    <label htmlFor="msg">Message</label>
                    <textarea className='bg-transparent border border-accent' id='msg' rows={8} ></textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="fade-left">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
