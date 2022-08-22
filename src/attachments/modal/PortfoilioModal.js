import React from "react";
import mailIcon from '../../assets/mailIcon.png'
import {GiCancel} from  'react-icons/gi'
export default function PortfolioModal(props) {
    const {hideModal,showModal}=props
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-2 max-w-7xl">
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
              <div className="xl:w-[350px] md:w-[350px] w-auto rounded overflow-hidden shadow-lg">
                    <div className=" w-full"> <img className="h-[200px] w-full" src={mailIcon} alt="mailbox"/> </div>
            <div classNamw="p-5">
                <h2 className="text-center font-Gelasio font-bold text-xl ">Thank-You</h2>
                <div class="flex justify-center my-5"><button  onClick={() => hideModal(false)}
 className="px-5 py-2.5 relative  group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
<span className="relative group-hover:text-white">Button Text</span>
</button>                </div>
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