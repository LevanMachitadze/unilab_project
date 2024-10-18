import React from 'react';
import comertialImg from '../assets/comertial.png';
import playIcon from '../assets/playIcon.svg';

const Comertial = () => {
  return (
    <section>
      <div className='flex container mx-auto max-w-[1172px]'>
        <div className='flex-1'>
          <img src={comertialImg} alt='comertal image' />
        </div>
        <div className='flex flex-col items-end'>
          <div className='flex flex-col max-w-[498px]'>
            <span className='text-[60px] font-bold text-gray-800'>
              One More Friend
            </span>
            <span className='text-[48px] font-bold text-gray-800'>
              Thousands More Fun!
            </span>

            <p className='mt-4 text-gray-700'>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>
          <div className='mt-6 space-x-4 flex'>
            <button className='flex justify-between items-center border-solid border-2 border-[#003459] text-[#003459] px-6 py-2 rounded-[57px] w-[167px]'>
              View Intro
              <div className='text-[#003459] rounded-full border-solid border-2 border-[#003459] w-[18px] h-[18px]'>
                <img src={playIcon} alt='play' />
              </div>
            </button>
            <button className='bg-[#003459] text-white px-6 py-2 rounded-[57px] w-[167px]'>
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comertial;
