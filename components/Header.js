import Image from 'next/image';

import Link from 'next/link';

import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto max-w-[1300px]"> {/* max-w-[1300px] lg:max-w-[1600px]*/}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 z-50'>
          {/* Logo */}
          <Link href={'/'}>
            <Image 
              src={'/logo.svg'} 
              width={220} 
              height={48}   
              alt='' 
              priority={true}
            />
          </Link>
          {/* Socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;