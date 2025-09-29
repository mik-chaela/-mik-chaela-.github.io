import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import { BsArrowRight} from 'react-icons/bs';

import { Pagination } from 'swiper';
import Image from 'next/image';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/proj1.jpg',
        },
        {
          title: 'title',
          path: '/proj2.jpg',
        },
        {
          title: 'title',
          path: '/proj3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
      style={{
            paddingBottom: '40px',
            '--swiper-pagination-color': '#ef4444',
            '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.4)',
            '--swiper-pagination-bullet-size': '8px',
            '--swiper-pagination-bullet-horizontal-gap': '4px'
          }}
    >
    
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-eows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div 
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* Image */}
                      <Image 
                        src={image.path}
                        width={500}
                        height={300}
                        alt=''
                      />

                      {/* Overlay Gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#6b1416] to-[#200e0e]
                      opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
                      group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>

                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150'>PROJECT</div>

                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                          duration-300 delay-200'> <BsArrowRight /> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

export default WorkSlider;