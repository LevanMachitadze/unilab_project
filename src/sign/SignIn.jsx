import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Welcome from './Welcome';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setError('Please write username and password');
    } else {
      setError('');
      navigate(`/welcome/${username}`);
    }
  };

  return (
    <>
      <div className='max-w-[1180px] flex flex-col items-center justify-center m-14'>
        <div className='w-[320px] flex flex-col items-center'>
          <div className='w-full text-center'>
            <h4 className='border-solid border-gray-600 border-2'>
              Continue With Google
            </h4>
          </div>
          <div className='flex w-full items-center mt-8'>
            <div className='bg-gray-600 h-[2px] w-[150px]'></div>
            <span className='ml-1 mr-1'>OR</span>
            <div className='bg-gray-600 h-[2px] w-[150px]'></div>
          </div>
        </div>
        <div className='max-w-[320px] w-full'>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Email</p>
              <input
                type='email'
                placeholder='Username'
                onChange={handleUsernameChange}
                className='border-2 w-full'
              />
              <p className='pt-8'>Password</p>
              <input
                type='password'
                placeholder='Password'
                onChange={handlePasswordChange}
                className='border-2 w-full'
              />
              {error && <p className='text-red-600'>{error}</p>}
            </div>
            <div className='text-end mt-12 mb-12'>
              <Link to='/forgetPassword'>Forget Password?</Link>
            </div>
            <div className='w-full bg-[#003459] text-white text-center h-[45px] flex items-center justify-center'>
              <Link to='/welcome'>Log in</Link>
            </div>
            <div className='text-[#003459] flex mt-5 justify-center items-center'>
              <p className='mr-2'>Don't have an account?</p>
              <Link to='/signup'>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
