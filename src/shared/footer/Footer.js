import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';


const Footer = () => {
  const goToApplication=(url)=>{
    window.open(url, '_blank')
}
  return (
    <section className='py-12 bg-[#181A18]'>
        <div className='flex justify-center flex-wrap gap-x-16 gap-y-10 items-center'>
            <FiFacebook onClick={()=>{goToApplication('https://www.facebook.com/nitesh.shukla.92775838')}} className=' p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
            <AiFillInstagram onClick={()=>{goToApplication('https://www.instagram.com/shukla_jiii07/')}} className=' p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
            <BsYoutube onClick={()=>{goToApplication('https://www.youtube.com/channel/UCKlMG3zMvnHHoOtzIYtGjyA')}} className='p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
            <AiFillLinkedin onClick={()=>{goToApplication('https://www.linkedin.com/in/nitesh-shukla-32a9051b6')}} className=' p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
            <AiFillGithub onClick={()=>{goToApplication('https://github.com/Nitesh-10-shukla')}} className='p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
            <AiFillTwitterCircle onClick={()=>{goToApplication('https://twitter.com/NiteshS84273251?s=08')}} className='p-3 bg-white rounded-xl hover:rounded-3xl hover:bg-[#00FFFF] transition-all duration-300 hover:text-white text-black' size='50'/>
        </div>
        <p className='text-white text-center pt-7 pb-0'>Created by Nitesh@{new Date().getFullYear()}</p>
    </section>
  )
}

export default Footer