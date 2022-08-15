import React from 'react'
import {SiPagespeedinsights} from 'react-icons/si'
const Works = () => {
  return (
    <div className='py-10'>
        <h1 className='text-center xl:text-[40px] text-3xl font-bold my-5'>What can i do best ?</h1>
        <div className='flex xl:justify-between justify-center flex-wrap xl:flex-nowrap container mx-auto gap-5 pt-7'>
         {
            data?.map((item,index)=>(
                <div key={index} className='flex flex-col items-center p-10 px-5 shadow xl:w-[400px] w-[300px]'>
                    {item.icon}
                    <h1 className='text-center text-[#282828] pt-3 font-semibold text-xl '>{item.title}</h1>
                    <p className='text-center text-[#828282] py-3'>{item.description}</p>
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