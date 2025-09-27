import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => (
  <div className="bg-[#090809] h-full relative overflow-hidden">
    <div className="w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden z-0">
      {/* Base image with multiple blend modes */}
      <div className="w-full h-full absolute inset-0 bg-explosion bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[#F44E3F] opacity-20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#090809] opacity-60 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#090809]/40 to-[#090809]/90" />
    </div>

    {/* particles */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden z-10">
      <ParticlesContainer />
    </div>

    {/* Content Container */}
    <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-20">
      {/* Title */} 
      <motion.h1 
        variants={fadeIn('down', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="h1 text-white drop-shadow-2xl relative z-30"
        style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(244,78,63,0.3)'
        }}
      >
        Building Brilliance, <br /> 
        <span className="text-[#F44E3F] drop-shadow-lg">One Line{' '}at a Time</span>
      </motion.h1>
      
      {/* Subtitle with better readability */}
      <motion.p 
        variants={fadeIn('down', 0.3)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 font-medium text-gray-300 
                   drop-shadow-lg relative z-30"
        style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
        }}
      >
        Fun fact about me is that I used to be a member of USC Dance Troupe, which taught 
        me discipline, teamwork, and appreciation for tradition — values I now bring into my journey of 
        building tech projects and learning step by step.
      </motion.p>
      
      {/* Button */}
      <div className="flex justify-center xl:hidden relative z-30">
        <ProjectsBtn />
      </div>
      <motion.div 
        variants={fadeIn('down', 0.4)} 
        initial="hidden" 
        animate="show" 
        exit="hidden"
        className="hidden xl:flex relative z-30"
      >
        <ProjectsBtn />
      </motion.div>
      
      
    </div>

    {/* Avatar */}
    <motion.div 
      variants={fadeIn('down', 0.5)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"
      transition={{duration: 1, ease: 'easeInOut'}}
      className='w-full h-full max-w-[737px] max-h-[678px] absolute right-20 -bottom-32 lg:bottom-0 lg:right-40 z-50'>
      <Avatar />
    </motion.div>
  </div>
);

export default Home;