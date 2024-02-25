import React from 'react'
import header1 from '../../assets/header2.svg';
import Typewriter from 'typewriter-effect';
import CVbuttons from '../../common/buttons/CVbuttons';
import { autoTypingConf } from '../../utils/helperUtils';
const Header = () => {
     const name= <Typewriter options={autoTypingConf} />
    return (
        <div className=' bg-[#181A18]  py-20 xl:py-20 h-[700px] ' id='home'>
            <div className='container mx-auto py-10 flex flex-col-reverse xl:flex-row md:flex-row xl:justify-between justify-center items-center'>
                <div data-aos='fade-right' className='xl:p-0 md:p-0 pt-10  xl:w-auto w-full xl:basis-1/2 md:basis-1/2 basis-none'>
                    <h1 className='xl:text-4xl xl:tracking-wide tracking-widest text-2xl text-[#FFF] leading-[45px] md:leading-[60px] xl:leading-[75px]  font-semibold '>Hello, I'm <br /><span className="text-[#00FFFF] text-[45px] xl:text-[65px]  font-Gelasio  font-bold xl:text-start xsm:text-center  xl:leading-[80px] leading-[40px]">Nitesh Shukla </span><br /> <span className='text-sky-400 tracking-widest'>{name}</span></h1>
                    <CVbuttons/>
                </div>
                <div className=' xl:basis-1/2 md:basis-1/2 basis-none' data-aos='fade-left'>
                    <img className='w-full xl:h-[450px] h-[200px] overflow-hidden  md:h-[450px] ' src={header1} alt='header' />
                </div>          
            </div>
        </div>
    )
}

export default Header