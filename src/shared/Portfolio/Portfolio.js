import React, { useState, useEffect } from 'react';
import { AiOutlineLink, AiFillEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { useGlobalContext } from '../../context/globalContext';
import ProjectModal from '../../attachments/modal/ProjectModal';
import CardScelaton from '../../common/CardScelaton';

const Portfolio = () => {
  const navigate = useNavigate();
  const { state } = useGlobalContext();
  const { projects } = state;
  const [loader, setLoader] = useState(true);
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (projects.length !== 0) {
      setLoader(false);
    }
  }, [projects]);

  const openModal = (data) => {
    setDetail(data);
    setModal(true);
  };

  const closeModal = () => setModal(false);

  const navigateToPortfolio = () => {
    navigate('/portfolio');
  };

  const goToApplication = (url) => {
    window.open(url, '_blank');
  };

  return (

    <div className='py-7' id='project'>
      <h1 className="text-center xl:text-[40px] text-3xl font-bold mt-5 font-Gelasio after:content:' '  after:block after:border-b-solid after:border-b-[5px] after:mt-2 after:mx-auto after:w-[140px] after:border-[#282828]">Projects</h1>
      <p className='text-center text-xl py-6 pb-3 font-Inter'>Some of my best projects</p>
      <div className='container mx-auto ' >
        <Slider {...settings}>
          {
            (!loader) ?
              projects?.map((item, index) => (
                <div key={index} className='group p-5 relative shadow  flex flex-col justify-center items-center text-center md:w-[300px]  xl:w-[400px]'>
                  <img src={item.image} className='xl:h-[200px] md:h-[200px] h-auto   xl:object-fill object-contain' alt='img' />
                  <div className='p-5 py-7'>
                    <h1 className="text-2xl text-start  text-{#282828} font-bold py-1 pt-5">{item.title}</h1>
                    <p className='text-lg text-start font-Inter font-normal text-[#828282] line-clamp-2'>{item.description}</p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center backdrop-blur-[10px] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">

                    <div className='flex gap-5 py-2'><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full cursor-pointer' onClick={() => { openModal(item) }} ><AiFillEye size='20' className='text-center' /></div><div className=' bg-white flex items-center justify-center  w-[40px] h-[40px] rounded-full cursor-pointer' onClick={() => { goToApplication(item.link) }}><AiOutlineLink size='20' className='text-center' /></div>
                    </div>        </div>
                </div>
              ))
              :
              ([...Array(3)]).map((_item) => (
                <CardScelaton />
              ))
          }
        </Slider>

      </div>

      <p onClick={navigateToPortfolio} className='text-center text-[#00FFFF] text-xl pt-5 cursor-pointer'>View All</p>

      <ProjectModal data={detail} showModal={modal} hideModal={closeModal} />

    </div>
  )
}

export default Portfolio;

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}

    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
