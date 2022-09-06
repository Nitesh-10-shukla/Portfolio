import React, { useState, useEffect } from 'react'
import { getBlog } from '../../utils';
import BlogCard from '../../attachments/card/BlogCard';
const Blog = () => {
    const[match,setMatch]=useState([])
    const [data, setData] = useState( []);
    const[search,setSeacrh]=useState("");
    useEffect(() => {
        myfun()
    }, [])
    const myfun = async () => {
        let blog = await getBlog();
        setData(blog)
    }
  const searchBlog=(e)=>{
        let{value}=e.target;
       setSeacrh(value)        
  }
  useEffect(() => {
    setMatch(
      data?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

    return (
        <div className='xl:py-20 py-16 container mx-auto'>

            <h1 className="text-center xl:text-[40px] my-10 text-3xl font-bold font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[100px] after:border-[#282828]">All Blogs</h1>
            <div className='flex xl:justify-end justify-center mb-10'>
                <form className='xl:w-[400px] w-auto'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search"  onChange={(e)=>{searchBlog(e)}} value={search} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required="" />
                        {/* <button type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-white  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button> */}
                    </div>
                </form>

            </div>
            <div className='flex  justify-between  xl:flex-nowrap flex-wrap gap-5'>
                {
                    (data.length!==0)?
                    (match.length!==0)?
                    match?.map((item,index) => { 
                        return <BlogCard key={index} blogs={item} />
                    }):<div className='flex container mx-auto justify-center items-center'>
                        <img className="w-full h-[400px] object-contain" src='https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png' alt="nodata"/>
                    </div>

                    :
                    ([...Array(3)]).map((item,index)=>(
                    
                        <div key={index} role="status" className="p-4 w-full h-[430px] rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                            <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                                <svg className="w-full h-16 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg>
                            </div>
                            <div className="h-2.5 mt-16 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            
                            <span className="sr-only">Loading...</span>
                        </div>
                        
                                        ))

                }
            </div>
        </div>
    )
}

export default Blog