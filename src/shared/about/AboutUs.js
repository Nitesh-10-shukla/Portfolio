import React from 'react';
import Typewriter from 'typewriter-effect';
import '../../App.css';
import NBS from '../../assets/NBS.jpg';
import CVbuttons from '../../common/buttons/CVbuttons';
import { autoTypingConf } from '../../utils/helperUtils';
const About = () => {
    return (
        <>
            <div className='bg-[#f8f8f8] py-7' id={'about'}>
                <h1 className="text-center xl:text-[40px] text-3xl font-bold my-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[160px] after:border-[#282828]">About Me</h1>
                <div className='container mx-auto gap-10 flex items-start flex-wrap xl:flex-nowrap justify-between xl:py-10 md:py-10 py-5'>
                    <div className='xl:basis-1/2 basis-none' data-aos='fade-right'>
                        <img className='xl:h-[500px] h-auto  shadow border-[16px] border-white xl:w-[400px] w-full object-cover' src={NBS} alt='img' />
                    </div>
                    <div className='xl:py-1 md:py-1 py-4 xl:basis-1/2  basis-none ' data-aos='fade-left'>
                        <h1 className='text-3xl font-semibold font-lg flex flex-col xl:flex-row md:flex-row flex-wrap justify-start items-center place-content-center place-items-center gap-2 text'>I'm Nitesh Shukla  <Typewriter style={{ color: "red" }} className='text-[#00FFFF] tracking-wide font-Gelasio'
                            options={autoTypingConf}
                        /></h1>
                        <p className='text-lg xl:w-[700px] xl:pt-14 md:pt-14 pt-5 w-auto text-justify font-normal xl:leading-7 md:leading-7 leading-10 font-[Inter] '>
                            Hey there! I'm Nitesh Shukla, a passionate software developer based in Lucknow, India. With a knack for crafting intuitive and engaging digital experiences, I specialize in building versatile software solutions that cater to diverse platforms and devices.
                            Currently seeking exciting opportunities to collaborate and innovate, I'm eager to contribute my skills to projects that push boundaries and make a meaningful impact. Feel free to reach out to me via email at <span class='text-semibold cursor-pointer text-[#828282]' onclick="window.location.href='mailto:niteshshukla1696@gmail.com'">niteshshukla1696@gmail.com</span>. Let's connect and create something extraordinary together!
                        </p>
                        <CVbuttons />
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;
