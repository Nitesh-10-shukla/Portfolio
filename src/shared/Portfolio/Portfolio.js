import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactIcon from '../../assets/DailyImg.png';
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import times from '../../assets/timesImg.png';
import shopping from '../../assets/EcommerceImg.png';
import tt from '../../assets/GameImg.png';
import devtrust from '../../assets/DevtrustImg.png';
import ecommerce from '../../assets/ecommerce.jpg'
import PortfolioModal from '../../attachments/modal/PortfoilioModal';

import { getProjects } from '../../utils';
const Portfolio = () => {
    const[project,setProject]=useState([])
    const[data,setData]=useState([]);
    const[modal,setModal]=useState(false);
    const[detail,setDetail]=useState()
    const openModal=(item)=>{
        setModal(true)
        setDetail(item)
    }
    const hideModal=()=>{
        setModal(false)
    }
    console.log(data,"af");
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
        setData(res)
    })
}
useEffect(()=>{
    fetchProject()
},[])
  return (
    <div className='py-7'>
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
        <div className='container mx-auto flex xl:gap-0 gap-5 justify-center items-center flex-wrap' data-aos='zoom-in'>
            {
                data.map((item,index)=>(
                    
                    <div key={index} className='group relative shadow-lg  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px] h-auto'>
                       <img src={item.image} className='xl:h-[300px] md:h-[300px] h-auto   xl:object-contain object-contain' alt='img'/> 
                       
                       <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-3xl  text-sky-500 font-medium py-2">{item.title}</h1>
            <div className='flex gap-5 py-2'><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' onClick={()=>{openModal(item)}}><AiFillEye size='20' className='text-center'/></div><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full'><AiOutlineLink size='20' className='text-center'/></div>
</div>        </div>
                    </div>
                ))
            }
        </div>
        <PortfolioModal data={detail} showModal={modal} hideModal={hideModal}/>

    </div>
  )
}

export default Portfolio;

const Tab = ['All','React','JavaScript','php & mysql']
const Projects=[
    {
        id:'2',
        image:times,
        title:'TimesAscent',
        description:'',
        link:'',
        category:'React'
    },
    {
        id:'2',
        image:ReactIcon,
        title:'React Web App',
        description:'',
        link:'',
        category:'React'
    },
    
    {
        id:'3',
        image:shopping,
        title:'Shopping Cart',
        description:'',
        link:'',
        category:'JavaScript'
    },{
        id:'4',
        image:tt,
        title:'Game App',
        description:'',
        link:'',
        category:'JavaScript'
    },
    {
        id:'5',
        image:devtrust,
        title:'Devtrust',
        description:'React',
        link:'',
        category:'React'
    },
    {
        id:'6',
        image:ecommerce,
        title:'Ecommerce website',
        description:'',
        link:'',
        category:'php & mysql'
    },
    
]




