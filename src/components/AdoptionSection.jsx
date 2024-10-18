import React from 'react';
import companysLogos from '../assets/companysLogos.png';
import holdingPaw from '../assets/holdingPaw.png';
import paw from '../assets/paw.svg';
import playIcon from '../assets/playIcon.svg';

const AdoptionSection = () => {
  return (
    <section className='py-12 '>
      <div className='max-w-[1180px] mx-auto px-4'>
        <div className='flex justify-between items-center mb-8'>
          <div className='text-center'>
            <span className='text-[#003459] text-[18px]'>
              Proud to be part of
            </span>
            <span className='font-bold text-[36px] text-[#003459] pl-3'>
              Pet Sellers
            </span>
          </div>
          <div>
            <button className='border border-[#003459] text-[#003459] px-4 py-2 rounded-full hover:bg-[#003459] hover:text-white transition'>
              View all our sellers ›
            </button>
          </div>
        </div>

        <img src={companysLogos} alt='Company Logos' className='w-full mb-10' />

        <div className='flex items-center justify-between  bg-yellow-50 p-3'>
          <div className='max-w-[600px]'>
            <div className='flex items-center mb-4'>
              <span className='text-[#003459] font-bold text-[53px]'>
                Adoption
              </span>
              <img src={paw} alt='Paw icon' className='ml-3 w-10 h-10' />
            </div>
            <div className='text-[#003459] font-semibold text-[36px] mb-4'>
              We Need Help. So Do They.
            </div>
            <div>
              <p className='text-[#242B33] text-[18px] mb-6'>
                Adopt a pet and give it a home, it will love you back
                unconditionally.
              </p>
            </div>

            <div className='mt-6 space-x-4 flex'>
              <button className='bg-[#003459] text-white px-6 py-2 rounded-full w-[167px]'>
                Explore Now
              </button>
              <button className='flex items-center border-2 border-[#003459] text-[#003459] px-6 py-2 rounded-full w-[167px]'>
                View Intro
                <div className='ml-2 w-[24px] h-[24px] flex justify-center items-center rounded-full border-2 border-[#003459]'>
                  <img src={playIcon} alt='play' className='w-4 h-4' />
                </div>
              </button>
            </div>
          </div>

          <div className='max-w-[450px]'>
            <img src={holdingPaw} alt='Holding Paw' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
