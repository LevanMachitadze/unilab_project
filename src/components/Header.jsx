import { useState } from 'react';
import React from 'react';
import translateIcon from '../assets/Frame (1).svg';
import logo from '../assets/Logo.png';

const Header = () => {
  const [arrow, setArrow] = useState(true);
  const handleChange = () => {
    setArrow((prev) => !prev);
  };
  return (
    <header className='bg-[#F7DBA7] py-4 '>
      <div className='container mx-auto flex justify-between items-center'>
        <nav className='space-x-6 max-w-[443px] max-h-[40px] flex '>
          <img src={logo} alt='Logo' />
          <a href='#' className='text-gray-800'>
            Home
          </a>
          <a href='#' className='text-gray-800'>
            Category
          </a>
          <a href='#' className='text-gray-800'>
            Contact
          </a>
        </nav>
        <div className='flex justify-between w-[333px]'>
          <button className=' text-white px-4 py-2 rounded-[57px] max-w-[214px] bg-[#003459]'>
            Join the community
          </button>
          <button
            onClick={handleChange}
            className='flex justify-between items-center w-[85px]'
          >
            <img src={translateIcon} alt='translateIcon' />
            VND {arrow ? '▼' : '▲'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
