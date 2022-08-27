import React from 'react'
import {SiPagespeedinsights} from 'react-icons/si';
import{FcPositiveDynamic} from 'react-icons/fc';
import{DiResponsive} from 'react-icons/di';
import{FaUserFriends} from 'react-icons/fa';
const Works = () => {
  return (
    <div className='py-20'>
        <h1 className="text-center xl:text-[40px] text-3xl font-bold mb-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[220px] after:border-[#282828]">What can i do best ?</h1>
        <div className='flex xl:justify-between justify-center flex-wrap xl:flex-nowrap container mx-auto gap-5 pt-14' data-aos='fade-up'>
         {
            data?.map((item,index)=>(
                
                <div key={index} className='flex hover:border-b-8 hover:rounded-lg  border-cyan-500 flex-col items-center p-10 px-5 shadow xl:w-[400px] w-[300px] transition ease-in-out delay-150 hover:-translate-y-[12px]'>
                    <div className='text-cyan-500'>{item.icon}</div>
                    <h1 className='text-center text-[#282828] pt-3 font-semibold text-xl font-Inter'>{item.title}</h1>
                    <p className='text-center text-[#828282] my-3 font-Inter line-clamp-2'>{item.description}</p>
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
        icon:<SiPagespeedinsights size={70} />,
        description:'Fast load times and lag free interaction, my highest priority.'
    },
    {
        id:"2",
        title:'Responsive',
        icon:<DiResponsive size={90} />,
        description:'My layouts will work on any device, big or small.'
    },
    {
        id:"3",
        title:'Dynamic',
        icon:<FcPositiveDynamic size={70} />,
        description:'I love to make web pages dynamic and working on dynamic data'
    },
    {
        id:"4",
        title:'User-Friendly',
        icon:<FaUserFriends size={70} />,
        description:'Making responsive and dynamic web application and providing intractive design and functionality which improve user experience.'
    }

]