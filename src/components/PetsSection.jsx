import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import dog6 from '../assets/dog6.png';
import dog7 from '../assets/dog7.png';
import dog8 from '../assets/dog8.png';

const petImages = {
  1: dog1,
  2: dog2,
  3: dog3,
  4: dog4,
  5: dog5,
  6: dog6,
  7: dog7,
  8: dog8,
};

const PetsSection = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get('/db.json')
      .then((response) => {
        if (response.data && response.data.pets) {
          setPets(response.data.pets);
        }
      })
      .catch((error) => console.error('Error fetching pet data: ', error));
  }, []);

  return (
    <section className='py-12'>
      <div className='container mx-auto max-w-[1172px]'>
        <div className='flex justify-between items-center w-full'>
          <div className='text-center font-bold mb-8 flex flex-col items-start'>
            <span>Whats new?</span>
            <span className='text-gray-800 text-3xl'>
              Take A Look At Some Of Our Pets
            </span>
          </div>
          <Link
            to='/pets'
            className='border-solid border-2 border-[#003459] text-[#003459] px-6 py-2 rounded-[57px] h-[44px]'
          >
            view more ›
          </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {pets.slice(0, 4).map((pet) => (
            <div key={pet.id} className='bg-white shadow-lg rounded-lg p-4'>
              <img
                src={petImages[pet.id]}
                alt={pet.name}
                className='rounded-lg w-full h-56 object-cover'
              />
              <p className='mt-4 font-bold text-gray-800'>{pet.name}</p>
              <p className='text-gray-600'>Gene: {pet.gene}</p>
              <p className='text-gray-600'>Age: {pet.age}</p>
              <p className='text-blue-500 mt-2'>{pet.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetsSection;
