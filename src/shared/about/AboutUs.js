import React from 'react';
import NBS from '../../assets/NBS.jpg'
const About = () => {
    return (
        <>
            <div className='bg-[#f8f8f8] py-7'>
                <h1 className="text-center xl:text-[40px] text-3xl font-bold my-5">About Me</h1>
                <div className='container mx-auto gap-10 flex items-start flex-wrap xl:flex-nowrap justify-between py-10'>
                    <div className='xl:basis-1/2 basis-none'>
                        <img className='xl:h-[555px] h-auto  shadow-lg border-[16px] border-white xl:w-[400px] w-full object-cover' src={NBS} />
                    </div>
                    <div className='xl:py-10 md:py-10 py-4 xl:basis-1/2  basis-none '>
                        <p className='text-xl xl:w-[700px] w-auto text-justify font-normal leading-8'>I'm a Front-End Developer from Lucknow(UP),India.
                            I love and enjoying build interactive websites that run across platforms & devices. I'm currently looking for opportunities. To get in touch mail me at-

                            <br /><span>niteshshukla1696@gmail.com</span>
                        </p>
                        <div className='xl:my-10 my-3 mt-10'>
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-black border hover:border-none bg-white rounded hover:bg-white group">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Download CV</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;
