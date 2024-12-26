import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-left">
                <h2 className='text-4xl md:text-5xl'>My Technologies</h2>
                <p className='text-black-500 pt-2'>
                    I have foundation in WEB development, excelling in HTML & CSS. I can use frameworks like React and Next.js to some extent. with passion of learning, I try to catch up with latest technologies to develop myself and contribute effectively and conveniently to projects. 
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="fade-left">HTML</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="fade-left">CSS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
