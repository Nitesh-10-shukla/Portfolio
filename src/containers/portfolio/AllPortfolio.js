import React from 'react'
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'

const AllPortfolio = () => {
    const data =localStorage.getItem("project");
    console.log(JSON.parse(data),"dfs");
  return (
    <div className="mt-28 pb-20">
        <h1 className="text-center xl:text-[40px] my-10 text-3xl font-bold mt-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[140px] after:border-[#282828]">Projects</h1>
        <div className='container mx-auto mt-10 grid xl:grid-cols-3 grid-col-1 md:grid-cols-3 xl:gap-10 gap-5 justify-center items-center' >
            {
                JSON.parse(data)?.map((item,index)=>(
                    
                    <div data-aos='zoom-in' key={index} className='group relative shadow  flex flex-col justify-center items-center text-center w-auto'>
                       <img src={item.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img'/> 
                       <div className='p-5 py-7'>
                       <h1 className="text-2xl text-start  text-{#282828} font-bold py-1">{item.title}</h1>
                       <p className='text-lg text-start font-Inter font-normal text-[#828282]'>{item.description}</p>
                       </div>
                       <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            
            <div className='flex gap-5 py-2'><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' ><AiFillEye size='20' className='text-center'/></div><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full'><AiOutlineLink size='20' className='text-center'/></div>
</div>        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default AllPortfolio