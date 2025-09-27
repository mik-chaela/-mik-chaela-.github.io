import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaShieldAlt, 
  FaServer,    
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
} from "react-icons/si";

import { 
  MdSecurity,
  MdApi,      
} from "react-icons/md";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Backend Development',
        icons: [
          <FaNodeJs />,
          <SiExpress />,
        ],
      },
      {
        title: 'Database Management',
        icons: [
          <SiMysql />,
          <FaDatabase />,
        ],
      },
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
        ],
      },
      {
        title: 'API Testing & Tools',
        icons: [
          <MdApi />,
          <FaServer />,
        ],
      },
      {
        title: 'Authentication & Security',
        icons: [
          <FaShieldAlt />,
          <MdSecurity />,
        ],
      },
      {
        title: 'Version Control',
        icons: [
          <FaGithub />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: ' ',
        stage: ' ',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Senior Member - USC Dance Troupe',
        stage: '2022 - 2025',
      },
    ],
  },
  {
    title: 'certifications',
    info: [
      {
        title: 'CCNA: Introduction to Networks',
        stage: 'May 2023',
      },
      {
        title: 'Creative Web Design - Call Center Academy',
        stage: 'Dec 2023',
      },
      {
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        stage: 'Dec 2023',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

import CountUp from 'react-countup';


const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial = 'hidden'
        animate='show'
        exit = 'hidden'
        className='xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial = 'hidden'
            animate='show'
            exit = 'hidden'
            className='h2'
          >
            Innovation <span className='text-accent'>sprouts</span> from quiet sparks.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial = 'hidden'
            animate='show'
            exit = 'hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify'
          >
            Innovation Sprouts From Quiet Sparks speaks to how I work and grow. Many of my best ideas 
            don’t arrive loudly — they start as small curiosities or quiet thoughts during my day. Over time, 
            I nurture these sparks through learning, experimenting, and building until they turn into projects
            I’m proud to share.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial = 'hidden'
            animate='show'
            exit = 'hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={4} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]'>Years of Experience</div>
              </div>

              {/* Projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]'>Finished Projects</div>
              </div>

              {/* Awards */}
              <div className='relative flex-1 '>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={5} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]
                max-w-[100px]'>Workshops Attended</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial = 'hidden'
          animate='show'
          exit = 'hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex)=> {
              return(
                <div 
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                  cursor-pointer capitalize xl:text-lg relative after:w-8
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
          items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return(
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                  items-center text-white/60'
                > 
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'> {item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'> 
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
