import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const getEventDate = () => {
    let eventDate = localStorage.getItem('eventDate');

    if (!eventDate) {
      eventDate = new Date();
      eventDate.setDate(eventDate.getDate() + 25);
      localStorage.setItem('eventDate', eventDate);
    }

    return new Date(eventDate);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(getEventDate()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(getEventDate()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100 mb-28'>
      <h4 className='text-4xl font-bold text-[#003459] mas-w-[1180px] w-full ml-80 mb-20 '>
        Big Summer Event
      </h4>
      <div className='flex justify-between text-center max-w-[1180px] w-full'>
        <div className='p-4 bg-[#003459] text-white rounded-lg w-[268px] h-[199px] flex items-center justify-center flex-col'>
          <p className='text-5xl font-bold'>{timeLeft.days}</p>
          <p className='text-lg mt-2'>DAYS</p>
        </div>
        <div className='p-4 bg-[#003459] text-white rounded-lg w-[268px] h-[199px] flex items-center justify-center flex-col'>
          <p className='text-5xl font-bold'>{timeLeft.hours}</p>
          <p className='text-lg mt-2'>HOURS</p>
        </div>
        <div className='p-4 bg-[#003459] text-white rounded-lg w-[268px] h-[199px] flex items-center justify-center flex-col'>
          <p className='text-5xl font-bold'>{timeLeft.minutes}</p>
          <p className='text-lg mt-2'>MINUTES</p>
        </div>
        <div className='p-4 bg-[#003459] text-white rounded-lg w-[268px] h-[199px] flex items-center justify-center flex-col'>
          <p className='text-5xl font-bold'>{timeLeft.seconds}</p>
          <p className='text-lg mt-2'>SECONDS</p>
        </div>
      </div>
    </section>
  );
};
export default CountdownTimer;
