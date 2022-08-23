import React, { useState, useEffect } from 'react'
import { getBlog } from '../../utils';
import BlogCard from '../../attachments/card/BlogCard';
const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        myfun()
    }, [])
    const myfun = async () => {
        let blog = await getBlog();
        setData(blog)
    }
    return (
        <div className='xl:py-20 py-16 container mx-auto'>

            <h1 className="text-center xl:text-[40px] my-10 text-3xl font-bold font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[100px] after:border-[#282828]">All Blogs</h1>
            <div className='flex xl:justify-end justify-center mb-10'>
                <form className='xl:w-[400px] w-auto'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required="" />
                        <button type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-white  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>

            </div>
            <div className='flex  justify-between  xl:flex-nowrap flex-wrap gap-5'>
                {
                    data?.map((item) => {
                        return <BlogCard blogs={item} />
                    })

                }
            </div>
        </div>
    )
}

export default Blog