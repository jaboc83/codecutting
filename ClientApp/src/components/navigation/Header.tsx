// 3rd Party
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../assets/images/logo.svg';

// Component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      role='banner'
      className='sticky top-0 py-4 px-4 bg-black text-white'
    >
      <div className='container m-auto flex'>
        <div
          id='nav-group'
          className='flex w-full md:items-center flex-col md:flex-row'
        >
          <Link
            to='/'
            id='title'
            className='bold text-2xl'
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={logo} height={100} width={250} />
          </Link>
          <div
            id='links'
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block flex flex-col md:flex-row md:text-sm lg:text-base uppercase flex-grow text-left lg:text-right`}
          >
            {' '}
            <Link
              to='/portfolio'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              portfolio
            </Link>
            <span className='p-2 hidden md:inline-block'>/</span>
            <Link
              to='/resume'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              resume
            </Link>
            <span className='p-2 hidden md:inline-block'>/</span>
            <Link
              to='/articles'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              articles
            </Link>
            <span className='p-2 hidden md:inline-block'>/</span>
            <a
              href='https://github.com/jaboc83'
              target='_blank'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              github
            </a>
            <span className='p-2 hidden md:inline-block'>/</span>
            <a
              href='https://twitter.com/jaboc83'
              target='_blank'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              twitter
            </a>
            <span className='p-2 hidden md:inline-block'>/</span>
            <a
              href='https://www.linkedin.com/in/jake-moening-6263619/'
              target='_blank'
              className='antialiased'
              onClick={() => setIsMenuOpen(false)}
            >
              linkedin
            </a>
          </div>
        </div>
        <div className='block md:hidden self-start flex-grow flex justify-end'>
          <button
            className='flex items-center px-5 py-5 mr-3 mt-2 border rounded border-white hover:text-black hover:bg-white hover:border-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
