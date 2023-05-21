import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import {  useNavigate } from 'react-router-dom';
import { getProjects } from '../../utils';
import ProjectModal from '../../attachments/modal/ProjectModal'
import CardScelaton from '../../common/CardScelaton';
import Slider from "react-slick";

const Portfolio = () => {
    const[project,setProject]=useState([])
    const[data,setData]=useState([]);
    const[loader,setLoader]=useState(true);
    const[active,setActive]=useState("All");
    const[modal,setModal]=useState(false);
    const[detail,setDetail]=useState({})
    const openModal=(datas)=>{
        setDetail(datas)
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
           let filter=project?.filter((item)=>item?.category?.toLowerCase()===items?.toLowerCase());
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
        <div className='container mx-auto ' >
        <Slider {...settings}>
            {
                (!loader)?
                data.map((item,index)=>(
                    
                    <div  key={index} className='group p-5 relative shadow  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px]'>
                       <img src={item.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img'/> 
                       <div className='p-5 py-7'>
                       <h1 className="text-2xl text-start  text-{#282828} font-bold py-1 pt-5">{item.title}</h1>
                       <p className='text-lg text-start font-Inter font-normal text-[#828282] line-clamp-2'>{item.description}</p>
                       </div>
                       <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            
            <div className='flex gap-5 py-2'><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full cursor-pointer' onClick={()=>{openModal(item)}} ><AiFillEye size='20' className='text-center'/></div><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full cursor-pointer' onClick={()=>{goToApplication(item.link)}}><AiOutlineLink size='20' className='text-center'/></div>
</div>        </div>
                    </div>
                ))
                :
                ([...Array(3)]).map((item)=>(
                    
                    <CardScelaton/>
                     
                                     )) 
}
</Slider>

        </div>
    
        <p onClick={()=>{navigateProjects()}} className='text-center text-[#00FFFF] text-xl pt-5 cursor-pointer'>View All</p>
    
        <ProjectModal data={detail} showModal={modal} hideModal={closeModal}/>

    </div>
  )
}

export default Portfolio;

const Tab = ['All','React','JavaScript','php & mysql']
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}

      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
