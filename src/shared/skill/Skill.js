import React from 'react'
import ProgressBar from '../../attachments/Progress';
const Skill = () => {
    const skills = [
        {lang:'HTML', bgcolor: "#828282", completed: 90 },
        {lang:"CSS", bgcolor: "#828282", completed: 90 },
        {lang:"JavaScript", bgcolor: "#828282", completed: 80 },
        {lang:"React", bgcolor: "#828282", completed: 75 },
        {lang:"Node", bgcolor: "#828282", completed: 50 },
        {lang:"SQL & Mongo", bgcolor: "#828282", completed: 50 },
      ];
      
  return (
    <section className='bg-[#f8f8f8] py-16'>
         <h1 className="text-center xl:text-[40px] text-3xl font-bold mb-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[60px] after:border-[#282828]">Skills</h1>
        <div className='container mx-auto flex  items-start py-10  xl:gap-0 gap-5 justify-between flex-wrap'>
            <div className='xl:basis-1/2 basis-none w-full' data-aos='fade-right'>
       {skills.map((item, index) => (
        <ProgressBar key={index} bgcolor={item.bgcolor} lang={item.lang} completed={item.completed} />
      ))}</div>
      <div className='xl:basis-1/2 basis-none xl:p-4 px-0' data-aos='fade-left'>
        <h1 className='xl:text-3xl md:text-xl text-xl font-bold leading-7 pb-2 font-Gelasio'>My creative skills and experience-</h1>
        <p className='text-lg font-normal tracking-normal leading-7 text-justify font-Inter pt-5'>I'am Full-Stack web developer, I had practical skills with interesting technology like HTML5, CSS3, ES6, Python, Django, React Js, Node Js and MongoDB . I have written all my skills here , for more information click below.</p>
        <button>Read More</button>
      </div>
      </div>
    </section>
  )
}

export default Skill