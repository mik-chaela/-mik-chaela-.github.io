import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Node.js + Express',
    description: 'Developing scalable backends and APIs using Node.js and Express for fast and reliable server-side logic.',
  },
  {
    icon: <RxPencil2 />,
    title: 'MySQL',
    description: 'Designing and managing structured databases to store, organize, and retrieve data securely and efficiently.',
  },
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description: 'Creating clean, responsive, and user-friendly interfaces that work seamlessly across devices.',
  },
  {
    icon: <RxReader />,
    title: 'Authentication and Security',
    description: 'Implementing JWT and role-based access control to protect routes and manage user sessions securely.',
  },
  {
    icon: <RxRocket />,
    title: 'Version Control',
    description: 'Managing code versions, collaborating on projects, and tracking changes to maintain clean development workflows.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[280px] sm:h-[380px]'
    style={{
          paddingBottom: '40px',
          '--swiper-pagination-color': '#ef4444',
          '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.4)',
          '--swiper-pagination-bullet-size': '8px',
          '--swiper-pagination-bullet-horizontal-gap': '4px'
        }}
  >
  
    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(239,68,68,0.15)] h-full min-h-[250px] sm:min-h-[320px] rounded-lg px-6 py-8 flex 
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
          hover:bg-[rgba(239,68,68,0.25)] transition-all duration-300'>
            {/* icon */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>

            {/* title & desc */}
            <div className='mb-8 flex-1'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-relaxed text-sm sm:text-base'>{item.description}</p>
            </div>

            {/* arrow */}
            <div className='text-3xl mt-auto'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent
              transition-all duration-300'/> 
            </div>
          </div>
        </SwiperSlide>
      );
    })}

  </Swiper>;
};

export default ServiceSlider;
