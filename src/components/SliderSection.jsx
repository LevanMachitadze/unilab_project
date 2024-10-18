import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import imgForSlide1 from '../assets/imgForSlider1.png';
import imgForSlide2 from '../assets/imgForSlider2.png';
import imgForSlide3 from '../assets/imgForSlider3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideImages = {
  1: imgForSlide1,
  2: imgForSlide2,
  3: imgForSlide3,
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='p-2 bg-white rounded-full shadow-lg focus:outline-none'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-gray-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='p-2 bg-white rounded-full shadow-lg focus:outline-none'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-gray-600'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 5l7 7-7 7'
        />
      </svg>
    </button>
  );
};

const SliderSection = () => {
  const [slides, setSlides] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios
      .get('/db3.json')
      .then((response) => {
        if (response.data && response.data.petKnowledge) {
          setSlides(response.data.petKnowledge);
        }
      })
      .catch((error) => console.error('Error fetching slider data: ', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className='py-12 flex items-center '>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center mb-8  max-w-[1180px]'>
          <div className='flex flex-col'>
            <span>You already know ?</span>
            <span className='text-3xl font-bold text-[#003459]'>
              Useful Pet Knowledge
            </span>
          </div>
          <div className='flex space-x-2'>
            <PrevArrow onClick={handlePrevClick} />
            <NextArrow onClick={handleNextClick} />
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className='px-4'>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden h-[424px]'>
                <img
                  src={slideImages[slide.id]}
                  alt={slide.title}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <span className='bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs'>
                    Pet knowledge
                  </span>
                  <h3 className='text-lg font-semibold text-gray-800 mt-4'>
                    {slide.title}
                  </h3>
                  <p className='text-gray-600 mt-2'>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderSection;
