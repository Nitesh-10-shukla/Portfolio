import React from 'react'
import { goToApplication } from '../../utils/helperUtils'

const CVbuttons = () => {
        return (
        <div className='xl:my-10 my-3 mt-10'>
            <button className='py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                <span className='relative group-hover:text-white text-lg font-normal font-[Inter] leading-[22px]'>
                    <button  onClick={()=>goToApplication("https://ik.imagekit.io/fsa7z1ahgp/myresume.pdf?updatedAt=1708837461207")} >Download CV</button>
                </span>
            </button>
        </div>
    )
}

export default CVbuttons
