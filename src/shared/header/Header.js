import React,{useState,useEffect,useRef} from 'react'
import header1 from '../../assets/header2.svg';
import useTypewriter from "react-typewriter-hook";

// import '../../styles/tailwind.css'
const Header = () => {
    const info = [
       "Frontend Developer","Blogger","Youtuber"
      ];
      let index = 0;
      const [data, setData] = useState("Frontend Developer");
      const intervalRef = useRef({});
      const name = useTypewriter(data);
      useEffect(
        () => {
          intervalRef.current = setInterval(() => {
            index = index > 2 ? 0 : ++index;
            setData(info[index]);
          }, 4000);
          return function clear() {
            clearInterval(intervalRef.current);
          };
        },
        [data]
      );      
    return (
        <div className='xl:mt-20 mt-10 py-5 xl:py-7 h-[600px]'>
            <div className='container mx-auto py-10 flex flex-col-reverse xl:flex-row md:flex-row xl:justify-between justify-center items-center'>
                <div className='xl:p-0 md:p-0 pt-10 xl:w-auto w-full xl:basis-1/2 md:basis-1/2 basis-none'>
                    <h1 className='xl:text-4xl text-xl leading-[35px] font-semibold '>Hello, I'm <br /><span className="text-[#00FFFF] text-[42px] xl:text-[60px]  font-Gelasio  font-bold xl:text-start xsm:text-center  xl:leading-[70px] leading-[40px]">Nitesh Shukla </span><br />I am a <span className='text-sky-400'>{name}</span></h1>
                    <div className=' mt-10'>
                            <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all border-black border hover:border-none bg-white rounded hover:bg-white group">
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Download CV</span>
                            </a>
                        </div>
                </div>
                <div className='xl:basis-1/2 md:basis-1/2 basis-none'>
                    <img className='w-full xl:h-[450px] h-[200px]  md:h-[450px] ' src={header1} alt='header' />
                </div>
                

            </div>

        </div>
    )
}

export default Header