import Image from "next/image";
import Particles from "react-tsparticles";

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return <div className="bg-primary/60 h-full">
    {/* Text */}
    <div className="w-full h-full bg-gradient-to-r from-[#F8C5BD]/10 via-[#E8998D]/30 to-[#C95F6A]/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <h1 className="h1">
          Transforming Ideas <br/> Into{' '} 
          <span className="text-accent">Digital Reality</span>
        </h1>
        {/* Subtitle */}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
          Lorem ipsum dolor sit amet. Est nulla beatae eum voluptas impedit quo 
          consequatur nulla ut numquam adipisci
        </p>
      </div>
    </div>

    {/* Image */}
    <div>image</div>
  </div>;
};

export default Home;
