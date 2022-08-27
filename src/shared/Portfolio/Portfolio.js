import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom';
import { getProjects } from '../../utils';
import ProjectModal from '../../attachments/modal/ProjectModal'
const Portfolio = () => {
    const[project,setProject]=useState([])
    const[data,setData]=useState([]);
    const[loader,setLoader]=useState(true);
    const[active,setActive]=useState("All");
    const[modal,setModal]=useState(false);
    const[detail,setDetail]=useState({})
    const openModal=(data)=>{
        setDetail(data)
        setModal(true)
    }
    const closeModal=()=>{
        setModal(false)
    }
    useEffect(()=>{
      if(project.length!==0){
        setLoader(false)
      }
      
    },[project])
    const filterList=(items)=>{
           let filter=project?.filter((item)=>item.category===items);
           setActive(items)
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

const navigateProjects=()=>{
        navigate('/portfolio');
    

}
useEffect(()=>{
    fetchProject()
},[])

const goToApplication=(url)=>{
        window.open(url, '_blank')
    }
  return (
      
        <div className='py-7' id='project'>
        <h1 className="text-center xl:text-[40px] text-3xl font-bold mt-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[140px] after:border-[#282828]">Projects</h1>
        <p className='text-center text-xl py-6 pb-3 font-Inter'>Some of my best projects</p>
        <div className='container mx-auto py-12 xl:pt-7 pt-2 xl:flex-nowrap flex-wrap flex justify-center xl:gap-12 gap-x-1 gap-y-1 items-center'>
            {
                Tab.map((item,index)=>(

<button key={index} onClick={()=>filterList(item)}  className={`${active===item?'bg-red-500':'bg-black'} border-none  rounded-full uppercase py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block`}>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-base font-normal font-[Inter] leading-[22px]'>
                  {item}                  </span>
                </button>

                                    ))
            }
        </div>
        <div className='container mx-auto flex xl:gap-10 gap-5 justify-center items-center xl:flex-nowrap md:flex-nowrap flex-wrap' >
            {
                (!loader)?
                data.slice(0,3).map((item,index)=>(
                    
                    <div data-aos='zoom-in' key={index} className='group p-5 relative shadow  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px]'>
                       <img src={item.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img'/> 
                       <div className='p-5 py-7'>
                       <h1 className="text-2xl text-start  text-{#282828} font-bold py-1 pt-5">{item.title}</h1>
                       {/* <p className='text-lg text-start font-Inter font-normal text-[#828282]'>{item.description}</p> */}
                       </div>
                       <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            
            <div className='flex gap-5 py-2'><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' onClick={()=>{openModal(item)}} ><AiFillEye size='20' className='text-center'/></div><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' onClick={()=>{goToApplication(item.link)}}><AiOutlineLink size='20' className='text-center'/></div>
</div>        </div>
                    </div>
                ))
                :
                ([...Array(3)]).map((item,index)=>(
                    
<div role="status" key={index} className="p-4 w-full h-[430px] rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-full h-16 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
    </div>
    <div className="h-2.5 mt-16 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    
    <span className="sr-only">Loading...</span>
</div>

                ))
            }

        </div>
    
        <p onClick={()=>{navigateProjects()}} className='text-center text-[#00FFFF] text-xl pt-5'>View All</p>
    
        <ProjectModal data={detail} showModal={modal} hideModal={closeModal}/>

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




