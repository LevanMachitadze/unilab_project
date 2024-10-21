import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import translateIcon from '../assets/Frame (1).svg';
import logo from '../assets/Logo.png';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };

  return (
    <header className='bg-[#F7DBA7] py-4 '>
      <div className='container mx-auto flex justify-between items-center'>
        <nav className='space-x-6 max-w-[443px] max-h-[40px] flex '>
          <img src={logo} alt='Logo' />
          <Link to='/' className='text-gray-800'>
            {t('home')}
          </Link>
          <Link to='/category' className='text-gray-800'>
            {t('category')}
          </Link>
          <Link to='/contact' className='text-gray-800'>
            {t('contact')}
          </Link>
        </nav>
        <div className='flex justify-between w-[333px]'>
          <Link to='/signin'>
            <button className='text-white px-4 py-2 rounded-[57px] max-w-[214px] bg-[#003459]'>
              {t('join')}
            </button>
          </Link>
          <button
            onClick={handleChange}
            className='flex justify-between items-center w-[85px]'
          >
            <img src={translateIcon} alt='translateIcon' />
            {i18n.language === 'geo' ? 'GEO' : 'VND'} {menuOpen ? '▲' : '▼'}
          </button>
          {menuOpen && (
            <div className='absolute right-10 mt-4 w-[120px] bg-white shadow-md rounded-lg'>
              <div
                onClick={() => switchLanguage('en')}
                className='cursor-pointer p-2 hover:bg-gray-200'
              >
                VND
              </div>
              <div
                onClick={() => switchLanguage('geo')}
                className='cursor-pointer p-2 hover:bg-gray-200'
              >
                GEO
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
