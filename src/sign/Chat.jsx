import React from 'react';
import { useState } from 'react';
import chatImage from '../assets/chatImage.png';
import chatCorner from '../assets/chatCorner.svg';
import chatLogo from '../assets/chatLogo.png';

const Chat = () => {
  const [wappGPT, setWappGPT] = useState(false);
  const [price, setPrice] = useState(false);
  const [faq, setFaq] = useState(false);

  const tester = () => {
    setWappGPT((prev) => !prev);
  };
  const tester2 = () => {
    setPrice((prev) => !prev);
  };
  const tester3 = () => {
    setFaq((prev) => !prev);
  };

  return (
    <>
      <div className='max-w-[1440px] flex flex-col items-center justify-center'>
        <div>
          <img src={chatImage} alt='chat image' />
        </div>
        <div className=''>
          <div className='w-[365px]  text-white mt-5 relative'>
            <p className='w-[325px] bg-[#003459] rounded-lg'>
              apidly build stunning Web Apps with Frest 🚀 Developer friendly,
              Highly customizable & Carefully crafted HTML Admin Dashboard
              Template.
            </p>
            <img
              src={chatLogo}
              alt='chat logo'
              className='absolute top-24 left-[-25px] '
            />
            <span className='bg-[#003459] absolute right-12 rounded-lg'>
              ▤👍👎
            </span>
          </div>
          <div className='max-w-[365px] flex justify-end flex-col relative mb-32 mt-20 '>
            <p className='bg-[#F7DBA7]'>
              More no. of lines text and showing complete list of features like
              time stamp + check icon READ
            </p>
            <img
              src={chatCorner}
              alt='chat corner'
              className='w-[40px] absolute bottom-0 right-0 top-10'
            />
          </div>
          <div>{wappGPT && <div></div>}</div>
          <div>{price && <div> </div>}</div>
          <div>{faq && <div> </div>}</div>
          <div className='max-w-[365px] mb-12 '>
            <div className='flex justify-between mb-4'>
              <button
                onClick={tester}
                className='text-start rounded-lg mr-3 bg-[#F3F5F6]'
              >
                🤔 What is WappGPT?
              </button>
              <button
                onClick={tester2}
                className='text-center rounded-lg mr-3 bg-[#F3F5F6]'
              >
                💰 Pricing
              </button>
              <button
                onClick={tester3}
                className='text-center rounded-lg bg-[#F3F5F6]'
              >
                🙋‍♂️ FAQs
              </button>
            </div>
            <div>
              <input
                type='text'
                placeholder='Enter your message here... '
                className='w-full rounded-lg bg-[#E8EBF0] h-[50px]'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
