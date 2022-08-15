import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {AiFillInstagram,AiFillLinkedin,AiFillGithub,AiFillTwitterCircle} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';


const Footer = () => {
  return (
    <section className='py-10 bg-black'>
        <div className='flex justify-center flex-wrap gap-16 items-center'>
            <FiFacebook className='rounded-full p-3 bg-white' size='50' color='black'/>
            <AiFillInstagram className='rounded-full p-3 bg-white' size='50' color='black'/>
            <BsYoutube className='rounded-full p-3 bg-white' size='50' color='black'/>
            <AiFillLinkedin className='rounded-full p-3 bg-white' size='50' color='black'/>
            <AiFillGithub className='rounded-full p-3 bg-white' size='50' color='black'/>
            <AiFillTwitterCircle className='rounded-full p-3 bg-white' size='50' color='black'/>
        </div>
        <p className='text-white text-center pt-7'>Created by Nitesh@{new Date().getFullYear()}</p>
    </section>
  )
}

export default Footer