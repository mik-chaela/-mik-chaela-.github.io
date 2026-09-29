import Link from "next/link";

import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,
  RiPinterestLine,
  RiGithubFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://github.com/mik-chaela"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>

      <Link
        href={'https://www.facebook.com/mikee.dionson'}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      > <RiFacebookLine />
      </Link>

    </div>

  );
};

export default Socials;
