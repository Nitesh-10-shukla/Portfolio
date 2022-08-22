/* eslint-disable */ 
import React,{useState} from "react";
import axios from "axios";
// import mailIcon from '../../assets/mailIcon.png';
import PortfolioModal from "./PortfoilioModal";
import {GiCancel} from  'react-icons/gi'
export default function Connect(props) {
    const[user,setUser]=useState({name:'',email:'',number:'',message:''});
    const[error,setError]=useState({});
    const[modal,setModal]=useState(false);
    const {hidefirstModal,showfirstModal}=props

    const openModal=()=>{
        setModal(true)
    }
    const hideModal=()=>{
        setModal(false)
    }
     const userData=(event)=>{
        let{name,value}=event.target;
        setError({...error,[name]:''})
        setUser({...user,[name]:value})
     }
     const validateFields=(e)=>{
        var numbers = /^[0-9]+$/;
        var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let valid=true;
        if(!user?.name.trim()){
           error.name="Please enter your full name"
           valid=false 
        }
        if(!user.email.trim()){
           error.email="Please enter your email"
           valid=false 
  
        }
        else if(!user.email.match(emailval)){
           error.email="Please enter valid email"
           valid=false 
        }
         if(!user.number.trim()){
           error.number="Please enter your number"
           valid=false 
  
         }
          else if(user.number.length!==10 || !user.number.match(numbers)){
           error.number="Please enter valid number"
           valid=false 
         }
        
         if(!user.message.trim()){
           error.message="Please enter your message"
           valid=false 
         }
         setError({...error})
         return valid
     }
  
     const submitForm=async(e)=>{
        e.preventDefault()
        const data = {
           name:user?.name,
           email:user?.email,
           mobile:user?.number,
           message:user?.message
        }
        validateFields()
        let vailddata =validateFields();
        if(vailddata){
           await axios.post('https://portfolio-backend-theta.vercel.app/api/contact',data).then((res)=>{
              console.log(res.status);
  
              if(res.status===200){
                hidefirstModal()
                // alert("thankyo")
                // setTimeout(() => {
                    openModal()

                // }, 600);
                 setUser({name:'',email:'',number:'',message:''})
              }
           })
        }
     }
  console.log(modal);
  return (
    <>
                    <PortfolioModal  showModal={modal} hideModal={hideModal}/>

      {showfirstModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >

            <div className="relative w-auto my-6 mt-20 mx-2 max-w-full">
              <div className="border-0  shadow-lg relative flex flex-col xl:w-[500px] md:w-[400px] w-full xl:h-auto h-[450px] overflow-y-scroll bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-end px-2 py-2 ">
                 
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-70 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => hidefirstModal(false)}
                  >
                    <span className="text-black">
                      <GiCancel color="gray" size='30'/>
                    </span>
                  </button>
                </div>
                <div className="w-full p-5">
                <form >
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={user?.name}
                        onChange={(e)=>{userData(e)}}
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                        <span className='px-2 text-red-600 '>{error.name && error.name}</span>
                  </div>
                  <div className="mb-6">
                     <input
                        type="email"
                        placeholder="Your Email"
                        name='email'
                        value={user?.email}
                        onChange={(e)=>{userData(e)}}

                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                                                <span className='px-2 text-red-600 '>{error.email && error.email}</span>

                  </div>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Phone"
                        name='number'
                        value={user?.number}
                        onChange={(e)=>{userData(e)}}

                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                                                <span className='px-2 text-red-600 '>{error.number && error.number}</span>

                  </div>
                  <div className="mb-6">
                     <textarea
                        rows="3"
                        placeholder="Your Message"
                        name='message'
                        value={user?.message}
                        onChange={(e)=>{userData(e)}}

                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "

></textarea>
<span className='px-2 text-red-600 '>{error.message && error.message}</span>

                  </div>
                  <div>
                   
                     <button onClick={(e)=>{submitForm(e)}} className='py-2.5 px-[25px]	my-3 relative w-full  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-lg font-normal font-[Inter] leading-[22px]'>
                     Send Message
                  </span>
                </button>
                  </div>
               </form>
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