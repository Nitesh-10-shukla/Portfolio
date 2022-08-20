import { useState } from "react";
import {NavLink} from 'react-router-dom'
export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white shadow fixed top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <NavLink to="/">
                            <h2 className="text-2xl font-bold text-[#282828]">Nitesh <span>Shukla</span></h2>
                        </NavLink>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-[#282828] hover:text-[#7bfbdb] font-Inter text-base font-semibold">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="text-[#282828] hover:text-[#7bfbdb] font-Inter text-base font-semibold">
                                <NavLink to="blog">Blog</NavLink>
                            </li>
                            <li className="text-[#282828] hover:text-[#7bfbdb] font-Inter text-base font-semibold">
                                <NavLink to="/">About US</NavLink>
                            </li>
                            <li className="text-[#282828] hover:text-[#7bfbdb] font-Inter text-base font-semibold">
                                <NavLink to="/">Contact US</NavLink>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:hidden sm:inline-block">
                        <button className='py-1 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-base font-normal font-[Inter]  leading-[22px]'>
                  Let's Connect
                  </span>
                </button>
            
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                <button className='py-2.5 px-[25px]	my-3 relative  group overflow-hidden font-medium bg-[#474747] text-[#FFFFFF] inline-block'>
                  <span className='absolute bottom-0 left-0 flex h-full w-0 mb-0 transition-all duration-700 ease-out transform translate-x-0 bg-[#4A4F4F]  group-hover:w-full opacity-90'></span>
                  <span className='relative group-hover:text-white text-base font-normal font-[Inter] leading-[22px]'>
                  Let's Connect
                  </span>
                </button>
            
                </div>
            </div>
        </nav>
    );
}

