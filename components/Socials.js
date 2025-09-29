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
        href={'https://www.youtube.com/@mikeedionson8847'}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      > <RiYoutubeLine />
      </Link>

      <Link
        href={'https://www.instagram.com/mikeedionson/'}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      > <RiInstagramLine/>
      </Link>

      <Link
        href={'https://www.facebook.com/mikee.dionson'}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      > <RiFacebookLine />
      </Link>

      <Link
        href={'https://ph.pinterest.com/dionsonmikee/'}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      > <RiPinterestLine />
      </Link>

    </div>

  );
};

export default Socials;
