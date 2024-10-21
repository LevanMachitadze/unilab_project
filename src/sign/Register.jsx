import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/SignIn');
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className='max-w-[1440px] flex items-center justify-center mt-40 mb-40 w-full p-5 '>
      <h2>Registration Successful! 🥳</h2>
      <p>Returning to Sign In Page in {time} seconds...</p>
    </div>
  );
};

export default Register;
