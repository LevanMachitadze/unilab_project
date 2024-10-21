import React from 'react';
import bannerImage from '../assets/mainImg.png';
import playIcon from '../assets/playIcon.svg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className='bg-[#F7DBA7] py-12 rounded-b-[57px]'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <div className='flex flex-col max-w-[498px]'>
            <span className='text-[60px] font-bold text-gray-800'>
              {t('bannerTitle')}
            </span>
            <span className='text-[48px] font-bold text-gray-800'>
              {t('bannerSubtitle')}
            </span>

            <p className='mt-4 text-gray-700'>{t('bannerDescription')}</p>
          </div>
          <div className='mt-6 space-x-4 flex'>
            <button className='flex justify-between items-center border-solid border-2 border-[#003459] text-[#003459] px-6 py-2 rounded-[57px] w-[167px]'>
              {t('viewIntro')}
              <div className='text-[#003459] rounded-full border-solid border-2 border-[#003459] w-[18px] h-[18px]'>
                <img src={playIcon} alt='play' />
              </div>
            </button>
            <button className='bg-[#003459] text-white px-6 py-2 rounded-[57px] w-[167px]'>
              {t('exploreNow')}
            </button>
          </div>
        </div>
        <div>
          <img
            src={bannerImage}
            alt='Person with pet'
            className='rounded-xl w-96'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
