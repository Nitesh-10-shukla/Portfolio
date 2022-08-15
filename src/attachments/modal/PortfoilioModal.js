import React from "react";
import {GiCancel} from  'react-icons/gi'
export default function PortfolioModal(props) {
    const {hideModal,showModal,data}=props
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end px-5 py-2 ">
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => hideModal(false)}
                  >
                    <span className="text-black">
                      <GiCancel color="black" size='30'/>
                    </span>
                  </button>
                </div>
<div className="flex justify-between p-12 gap-x-8 items-start">
    <img className="w-[200px] h-[200px] object-contain" src={data.image}></img>
                <div className="px-2 py-0">
                    <h1 className="text-[#282828] text-lg font-bold text-start pb-2">{data.title}</h1>
                  <p className="text-justify text-slate-500 text-lg ">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
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