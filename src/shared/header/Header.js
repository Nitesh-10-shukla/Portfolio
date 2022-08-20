import React from 'react'
import header1 from '../../assets/header2.svg';
import Typewriter from 'typewriter-effect';

const Header = () => {
    const info = [
       "I am a Frontend Developer","I am a Blogger","I am a Youtuber"
      ];
     const name= <Typewriter
      options={{
        strings: info,
        autoStart: true,
        loop: true,
      }}
    />
    return (
        <div className=' bg-[#181A18]  py-20 xl:py-20 h-[700px]'>
            <div className='container mx-auto py-10 flex flex-col-reverse xl:flex-row md:flex-row xl:justify-between justify-center items-center'>
                <div data-aos='fade-right' className='xl:p-0 md:p-0 pt-10  xl:w-auto w-full xl:basis-1/2 md:basis-1/2 basis-none'>
                    <h1 className='xl:text-4xl xl:tracking-wide tracking-widest text-2xl text-[#FFF] leading-[45px] md:leading-[60px] xl:leading-[75px]  font-semibold '>Hello, I'm <br /><span className="text-[#00FFFF] text-[45px] xl:text-[65px]  font-Gelasio  font-bold xl:text-start xsm:text-center  xl:leading-[80px] leading-[40px]">Nitesh Shukla </span><br /> <span className='text-sky-400 tracking-widest'>{name}</span></h1>
                    <div className='xl:mt-10 md:mt-10 mt-4'>
                    <button className='py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-lg font-normal font-[Inter] leading-[22px]'>
                    Download CV
                  </span>
                </button>
                        </div>
                </div>
                <div className=' xl:basis-1/2 md:basis-1/2 basis-none' data-aos='fade-left'>
                    <img className='w-full xl:h-[450px] h-[200px] overflow-hidden  md:h-[450px] ' src={header1} alt='header' />
                </div>
                

            </div>

        </div>
    )
}

export default Header