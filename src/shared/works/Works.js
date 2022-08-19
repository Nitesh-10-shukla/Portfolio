import React from 'react'
import {SiPagespeedinsights} from 'react-icons/si'
const Works = () => {
  return (
    <div className='py-20'>
        <h1 className="text-center xl:text-[40px] text-3xl font-bold mb-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[220px] after:border-[#282828]">What can i do best ?</h1>
        <div className='flex xl:justify-between justify-center flex-wrap xl:flex-nowrap container mx-auto gap-5 pt-14' data-aos='fade-up'>
         {
            data?.map((item,index)=>(
                <div key={index} className='flex flex-col items-center p-10 px-5 shadow xl:w-[400px] w-[300px] transition ease-in-out delay-150 hover:-translate-y-[12px]'>
                    {item.icon}
                    <h1 className='text-center text-[#282828] pt-3 font-semibold text-xl font-Inter'>{item.title}</h1>
                    <p className='text-center text-[#828282] py-3 font-Inter'>{item.description}</p>
                </div>
            ))
         }
        </div>
    </div>
  )
}

export default Works;

const data=[
    {
        id:"1",
        title:'Fast',
        icon:<SiPagespeedinsights size={70} color='blue'/>,
        description:'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id:"2",
        title:'Responsive',
        icon:<SiPagespeedinsights size={70}/>,
        description:'My layouts will work on any device, big or small.'
    },
    {
        id:"3",
        title:'Dynamic',
        icon:<SiPagespeedinsights size={70}/>,
        description:'My layouts will work on any device, big or small.'
    },
    {
        id:"4",
        title:'Responsive',
        icon:<SiPagespeedinsights size={70}/>,
        description:'My layouts will work on any device, big or small.'
    }

]