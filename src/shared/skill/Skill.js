import React from 'react'
import ProgressBar from '../../attachments/Progress';
const Skill = () => {
  const skills = [
    { lang: 'HTML', bgcolor: "#828282", completed: 90 },
    { lang: "CSS", bgcolor: "#828282", completed: 90 },
    { lang: "JavaScript & TypeScript", bgcolor: "#828282", completed: 80 },
    { lang: "ReactJS & NextJS", bgcolor: "#828282", completed: 75 },
    { lang: "Node & Express", bgcolor: "#828282", completed: 50 },
    { lang: "GraphQl", bgcolor: "#828282", completed: 50 },
    { lang: "SQL & Mongo", bgcolor: "#828282", completed: 50 },
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
          <h1 className='xl:text-3xl md:text-xl text-xl font-bold leading-7 pb-2 font-Gelasio'>My Skills and Expertise-</h1>
          <p className='text-lg font-normal tracking-normal leading-7 text-justify font-Inter pt-5'>As a software developer, I bring practical expertise in a diverse range of technologies, including but not limited to HTML5, CSS3, ES6, React.js, Node.js, MongoDB, GraphQL, and SQL. With a keen eye for innovation and a passion for problem-solving, I leverage these tools to craft robust and efficient software solutions. From front-end interfaces to back-end systems, I thrive on the challenge of creating seamless and scalable applications that meet the needs of today's digital landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skill;
