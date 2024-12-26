import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/ahmed.jpg)]  bg-cover'
    style={{backgroundSize:"20%", backgroundPosition:"left 175px top 175px"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="fade-left">I&apos;m</p>
            <p data-aos="fade-left">Ahmed</p>
            <p data-aos="fade-left">Bin Khalid</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
