import React from 'react';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-[#FCEED5] text-white py-12 rounded-t-[30px]'>
      <div className='container mx-auto text-center'>
        <div className='bg-[#003459] flex justify-between items-center px-[130px] max-w-[1180px] w-full h-[136px] rounded-[16px]'>
          <p className='flex-[0.5] text-start mr-5'>
            Register Now So You Don't Miss Our Programs
          </p>
          <form className='flex items-center mt-4 flex-[1.5] bg-white h-[72px]'>
            <input
              type='email'
              className='px-4 py-2 rounded-l-lg border-none max-w-[508px] w-full'
              placeholder='Enter your email'
            />
            <button className='bg-[#003459] px-4 py-2 rounded-r-lg h-[48px]'>
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center mt-10 border-b border-b-2 border-b-[#003459] pb-4'>
          <nav className='flex space-x-8'>
            <a href='#' className='text-[#00171F]'>
              Home
            </a>
            <a href='#' className='text-[#00171F]'>
              Category
            </a>
            <a href='#' className='text-[#00171F]'>
              About
            </a>
            <a href='#' className='text-[#00171F]'>
              Contact
            </a>
          </nav>

          <div className='flex space-x-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={facebookIcon}
                alt='Facebook'
                className='h-6 w-6 hover:opacity-80'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={twitterIcon}
                alt='Twitter'
                className='h-6 w-6 hover:opacity-80'
              />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={instagramIcon}
                alt='Instagram'
                className='h-6 w-6 hover:opacity-80'
              />
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={youtubeIcon}
                alt='YouTube'
                className='h-6 w-6 hover:opacity-80'
              />
            </a>
          </div>
        </div>

        <div className='flex justify-between items-center pt-6'>
          <p className='text-sm text-[#667479]'>
            © 2022 Monito. All rights reserved.
          </p>
          <img src={logo} alt='Logo' className='h-8' />{' '}
          <div className='flex space-x-4'>
            <a href='#' className='text-[#667479]'>
              Terms of Service
            </a>
            <a href='#' className='text-[#667479]'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
