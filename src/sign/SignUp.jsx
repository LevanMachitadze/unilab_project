import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !username || !email || !confirmEmail || !number) {
      setError('Please fill all fields');
    } else if (email !== confirmEmail) {
      setError('Emails do not match');
    } else {
      setError('');

      navigate('/Register');
    }
  };

  return (
    <div className='max-w-[1180px] flex flex-col items-center justify-center m-14 text-[#003459]'>
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
          <div className='w-full'>
            <p>Name</p>
            <input
              type='text'
              value={name}
              onChange={handleNameChange}
              className='border-2 w-full'
            />

            <p>Email</p>
            <input
              type='email'
              value={email}
              onChange={handleEmailChange}
              className='border-2 w-full'
            />

            <p>Confirm Email</p>
            <input
              type='email'
              value={confirmEmail}
              onChange={handleConfirmEmailChange}
              className='border-2 w-full'
            />
            {error && <p className='text-red-600'>{error}</p>}

            <p>Password</p>
            <input type='password' className='border-2 w-full' />
          </div>
          <div className='mt-7 mb-7'>
            <span>
              By creating an account you agree with our Terms of Service,
              Privacy Policy,
              <input type='checkbox' className='ml-2' />
            </span>
          </div>
          <div className='w-full bg-[#003459] text-white text-center h-[45px] flex items-center justify-center'>
            <Link to='/register'>Create Account</Link>
          </div>
          <div className='text-[#003459] flex mt-5 justify-center items-center'>
            <p className='mr-2'>Already have an account?</p>
            <Link to='/signin'> Log in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
