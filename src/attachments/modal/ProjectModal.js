import React from "react";
import {GiCancel} from  'react-icons/gi'
export default function ProjectModal(props) {
    const {hideModal,showModal,data}=props
    const goToApplication=(url)=>{
        window.open(url, '_blank')
    }
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div data-aos='zoom-in' className=" relative w-auto my-6 mx-2 max-w-7xl">
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end px-2 py-2 ">
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-70 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => hideModal(false)}
                  >
                    <span className="text-black">
                      <GiCancel color="gray" size='30'/>
                    </span>
                  </button>
                </div>
                <div   className='group relative shadow p-5 flex flex-col justify-center items-center text-center w-full'>
                       <img src={data.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img'/> 
                       <div className='p-5 py-7'>
                       <h1 className="text-2xl text-start  text-{#282828} font-bold py-1">{data.title}</h1>
                       <p className='text-lg text-start font-Inter font-normal text-[#828282]'>{data.description}</p>
                       </div>
                       <div className="">
                    <button onClick={()=>{goToApplication(data.link)}} className="py-[10px] px-[25px] text-white font-Inter text-base rounded-full font-normal bg-blue-500">View Website</button>
                  </div>
                       </div>
                  
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}