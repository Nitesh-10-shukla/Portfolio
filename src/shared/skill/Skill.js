import React from 'react'
import ProgressBar from '../../attachments/Progress';
const Skill = () => {
    const skills = [
        {lang:'HTML', bgcolor: "#6a1b9a", completed: 90 },
        {lang:"CSS", bgcolor: "#00695c", completed: 90 },
        {lang:"JavaScript", bgcolor: "#ef6c00", completed: 80 },
        {lang:"React", bgcolor: "#ef6c00", completed: 75 },
        {lang:"Node", bgcolor: "#ef6c00", completed: 50 },
        {lang:"SQL & Mongo", bgcolor: "#ef6c00", completed: 50 },
      ];
      
  return (
    <section className='bg-[#f8f8f8] py-16'>
         <h1 className='text-center xl:text-[40px] text-3xl font-bold mb-5'>Skills</h1>
        <div className='container mx-auto flex  items-start  xl:gap-0 gap-5 justify-between flex-wrap'>
            <div className='xl:basis-1/2 basis-none w-full'>
       {skills.map((item, index) => (
        <ProgressBar key={index} bgcolor={item.bgcolor} lang={item.lang} completed={item.completed} />
      ))}</div>
      <div className='xl:basis-1/2 basis-none xl:p-4 px-0'>
        <h1 className='xl:text-xl md:text-xl sm:text-sm font-semibold pb-2'>My creative skills and experience-</h1>
        <p>I'am Full-Stack web developer, I had practical skills with interesting technology like HTML5, CSS3, ES6, Python, Django, React Js, Node Js and MongoDB . I have written all my skills here , for more information click below.</p>
        <button>Read More</button>
      </div>
      </div>
    </section>
  )
}

export default Skill