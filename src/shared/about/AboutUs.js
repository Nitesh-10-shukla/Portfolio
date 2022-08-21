import React from 'react';
import Typewriter from 'typewriter-effect';
import '../../App.css'
import NBS from '../../assets/NBS.jpg'
const About = () => {
    const info = [
        "Frontend Developer","Blogger","Youtuber"
       ];
     
 
    return (
        <>
            <div className='bg-[#f8f8f8] py-7' id={'about'}>
                <h1 className="text-center xl:text-[40px] text-3xl font-bold my-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[160px] after:border-[#282828]">About Me</h1>
                <div className='container mx-auto gap-10 flex items-start flex-wrap xl:flex-nowrap justify-between xl:py-10 md:py-10 py-5'>
                    <div className='xl:basis-1/2 basis-none' data-aos='fade-right'>
                        <img className='xl:h-[500px] h-auto  shadow border-[16px] border-white xl:w-[400px] w-full object-cover' src={NBS} alt='img'/>
                    </div>
                    <div className='xl:py-1 md:py-1 py-4 xl:basis-1/2  basis-none ' data-aos='fade-left'>
                    {/* <span className='text-[#00FFFF] tracking-wide font-Gelasio'> */}
                        <h1 className='text-3xl font-semibold font-lg flex flex-col xl:flex-row md:flex-row flex-wrap justify-start items-center place-content-center place-items-center gap-2 text'>I'm Nitesh Shukla  <Typewriter style={{color:"red"}} className='text-[#00FFFF] tracking-wide font-Gelasio'
  options={{
    strings: info,
    autoStart: true,
    loop: true,
  }}
/></h1>
                        <p className='text-lg xl:w-[700px] xl:pt-14 md:pt-14 pt-5 w-auto text-justify font-normal xl:leading-7 md:leading-7 leading-10 font-[Inter] '>I'm a Front-End Developer from Lucknow(UP),India.
                            I love and enjoying build interactive websites that run across platforms & devices. I'm currently looking for opportunities. To get in touch mail me at-

                            <br /><span className='text-semibold  text-[#828282]'>niteshshukla1696@gmail.com</span>
                        </p>
                        <div className='xl:my-10 my-3 mt-10'>
                        <button className='py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-lg font-normal font-[Inter] leading-[22px]'>
                    Download CV
                  </span>
                </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;
