import React,{useState} from 'react'
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 250) : text}
        <span onClick={toggleReadMore} className=" cursor-pointer text-base text-[#828282] font-Inter font-normal leading-7 text-justify">
          {isReadMore ? <span className='text-red-600'>...read more </span> : <span className='text-red-600 cursor-pointer'>show less</span>}
        </span>
      </p>
    );
  };
const BlogCard = (props) => {
    let {blogs} =props
    // console.log(blogs);
  return (
    <div className='shadow bg-white xl:w-[420px] w-auto'>
        <img className='xl:h-[230px] md:h-[220px] h-auto w-full' src={blogs?.image} alt='img'/>
        <div className='p-5'>
        <h1 className='text-xl font-bold font-Gelasio pb-2'>{blogs?.title}</h1>
        <ReadMore>
        {blogs?.description}
        </ReadMore>
        </div>
    </div>
  )
}

export default BlogCard