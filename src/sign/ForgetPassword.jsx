import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mail === '' || username === '' || number === '') {
      setError('Please fill all fields');
    } else {
      setError('');
      navigate('/PasswordSent');
    }
  };

  return (
    <div>
      <div className='max-w-[1180px] flex flex-col items-center justify-center m-14 text-[#003459]'>
        <form onSubmit={handleSubmit}>
          <div className='max-w-[320px] w-full'>
            <p>Enter Your Email</p>
            <input
              className='border-2 w-full'
              type='email'
              placeholder='email'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <p>Enter Your Username</p>
            <input
              className='border-2 w-full'
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Enter Your Mobile Number</p>
            <input
              className='border-2 w-full'
              type='number'
              placeholder='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {error && <p className='error_forget'>{error}</p>}
          </div>
          <div className='w-full bg-[#003459] text-white text-center h-[45px] flex items-center justify-center mt-9'>
            <Link to='/passwordsent'>Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
