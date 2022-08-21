import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom';
// import PortfolioModal from '../../attachments/modal/PortfoilioModal';
import { getProjects } from '../../utils';

const Portfolio = () => {
    const[project,setProject]=useState([])
    const[data,setData]=useState([]);
     const[detail,setDetail]=useState(false)
   
    const filterList=(items)=>{
           let filter=project?.filter((item)=>item.category===items);
           if(items==="All"){
            setData(project)
           }
           else{
           setData(filter)
           }
     }
const fetchProject=async()=>{
    await getProjects().then((res)=>{
        setProject(res)
        localStorage.setItem("project",JSON.stringify(res))
        setData(res)
    })
}
const navigate =useNavigate()
const location =useLocation()
console.log(location,"saf")

const navigateProjects=()=>{
        navigate('/portfolio');
    

}
console.log(detail);
useEffect(()=>{
    fetchProject()
},[])


  return (
    <div className='py-7' id='project'>
        <h1 className="text-center xl:text-[40px] text-3xl font-bold mt-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[140px] after:border-[#282828]">Projects</h1>
        <p className='text-center text-xl py-6 font-Inter'>Some of my best projects</p>
        <div className='container mx-auto py-12 xl:pt-7 pt-2 flex-wrap flex justify-center xl:gap-36 gap-x-5 gap-y-1 items-center'>
            {
                Tab.map((item,index)=>(

<button key={index} onClick={()=>filterList(item)}  className='py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-lg font-normal font-[Inter] leading-[22px]'>
                  {item}                  </span>
                </button>

                                    ))
            }
        </div>
        <div className='container mx-auto flex xl:gap-10 gap-5 justify-center items-center flex-wrap' >
            {
                data.slice(0,3).map((item,index)=>(
                    
                    <div data-aos='zoom-in' key={index} className='group relative shadow  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px]'>
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
    
        <p onClick={()=>{navigateProjects()}} className='text-center text-[#00FFFF] text-xl pt-5'>View All</p>
    
        {/* <PortfolioModal data={detail} showModal={modal} hideModal={hideModal}/> */}

    </div>
  )
}

export default Portfolio;

const Tab = ['All','React','JavaScript','php & mysql']
// const Projects=[
//     {
//         id:'2',
//         image:times,
//         title:'TimesAscent',
//         description:'',
//         link:'',
//         category:'React'
//     },
//     {
//         id:'2',
//         image:ReactIcon,
//         title:'React Web App',
//         description:'',
//         link:'',
//         category:'React'
//     },
    
//     {
//         id:'3',
//         image:shopping,
//         title:'Shopping Cart',
//         description:'',
//         link:'',
//         category:'JavaScript'
//     },{
//         id:'4',
//         image:tt,
//         title:'Game App',
//         description:'',
//         link:'',
//         category:'JavaScript'
//     },
//     {
//         id:'5',
//         image:devtrust,
//         title:'Devtrust',
//         description:'React',
//         link:'',
//         category:'React'
//     },
//     {
//         id:'6',
//         image:ecommerce,
//         title:'Ecommerce website',
//         description:'',
//         link:'',
//         category:'php & mysql'
//     },
    
// ]




