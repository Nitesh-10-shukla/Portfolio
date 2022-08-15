import React from 'react'
import { useState } from 'react';
import ReactIcon from '../../assets/react.png';
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import times from '../../assets/times.png';
import shopping from '../../assets/shopping.png';
import tt from '../../assets/TT.jpg';
import devtrust from '../../assets/devtrust.png';
import ecommerce from '../../assets/ecommerce.jpg'
import PortfolioModal from '../../attachments/modal/PortfoilioModal';
import { getDefaultNormalizer } from '@testing-library/react';
const Portfolio = () => {
    const[data,setData]=useState(Projects);
    const[modal,setModal]=useState(false);
    const[detail,setDetail]=useState()
    const openModal=(item)=>{
        setModal(true)
        setDetail(item)
    }
    const hideModal=()=>{
        setModal(false)
    }
    const filterList=(items)=>{
           let filter=Projects.filter((item)=>item.category==items);
           if(items=="All"){
            setData(Projects)
           }
           else{
           setData(filter)
           }
     }
  return (
    <div className='py-7'>
        <h1 className='text-center xl:text-[40px] text-3xl font-bold mt-5'>Projects</h1>
        <p className='text-center text-xl py-2'>Some of my best projects</p>
        <div className='container mx-auto py-12 pt-7 flex-wrap flex justify-center xl:gap-36 gap-5 items-center'>
            {
                Tab.map((item,index)=>(
                    <button onClick={()=>filterList(item)} className="inline-block py-[5px] px-[25px]  text-lg font-semibold  capitalize  text-white bg-gray-800  hover:bg-gray-700 ">
                    {item}
                    </button>
                    // <button key={index} className='text-xl font-bold  capitalize text-[#282828]  hover:text-[red]'   >{item}</button>
                ))
            }
        </div>
        <div className='container mx-auto flex xl:gap-0 gap-5 justify-center items-center flex-wrap'>
            {
                data.map((item,index)=>(
                    
                    <div key={index} className='group relative shadow-lg  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px] h-auto'>
                       <img src={item.image} className='xl:h-[300px] md:h-[300px] h-auto   xl:object-cover object-contain' alt='img'/> 
                       
                       <div
            class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-3xl  text-sky-500 font-medium py-2">{item.title}</h1>
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
        category:''
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




