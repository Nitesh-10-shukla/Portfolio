import React,{useState} from 'react'
import {AiOutlineLink,AiFillEye} from 'react-icons/ai'
import ProjectModal from '../../attachments/modal/ProjectModal';
const AllPortfolio = () => {
    const data =localStorage.getItem("project");
    const[modal,setModal]=useState(false);
    const[detail,setDetail]=useState({})
    const openModal=(data)=>{
        setDetail(data)
        setModal(true)
    }
    const closeModal=()=>{
        setModal(false)
    }
    const goToApplication=(url)=>{
        window.open(url, '_blank')
    }
  return (
    <div className="mt-28 pb-20">
                <ProjectModal data={detail} showModal={modal} hideModal={closeModal}/>
        <h1 className="text-center xl:text-[40px] my-10 text-3xl font-bold mt-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[140px] after:border-[#282828]">Projects</h1>
        <div className='container mx-auto mt-10 grid xl:grid-cols-3 grid-col-1 md:grid-cols-3 xl:gap-10 gap-5 justify-center items-center' >
            {
                (data)?
                JSON.parse(data)?.map((item,index)=>(
                    
                    <div data-aos='zoom-in' key={index} className='group relative shadow  flex flex-col justify-center items-center text-center w-auto'>
                       <img src={item.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img'/> 
                       <div className='p-5 py-7'>
                       <h1 className="text-2xl text-start  text-{#282828} font-bold py-1">{item.title}</h1>
                       <p className='text-lg text-start font-Inter font-normal text-[#828282]'>{item.description}</p>
                       </div>
                       <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            
            <div className='flex gap-5 py-2'><div onClick={()=>{openModal(item)}} className='cursor-pointer bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' ><AiFillEye size='20'  className='text-center'/></div><div className='cursor-pointer bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full' onClick={()=>{goToApplication(item.link)}}><AiOutlineLink size='20'  className='text-center'/></div>
</div>        </div>
                    </div>
                ))
                :
                ([...Array(3)]).map((item)=>(
                    
                    <div role="status" className="p-4 w-full h-[430px] rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                            <svg className="w-full h-16 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
                        </div>
                        <div className="h-2.5 mt-16 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        
                        <span className="sr-only">Loading...</span>
                    </div>
                    
                                    ))            }

        </div>
    </div>
  )
}

export default AllPortfolio