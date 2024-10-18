import React from 'react';
import { Link } from 'react-router-dom';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import dog6 from '../assets/dog6.png';
import dog7 from '../assets/dog7.png';
import dog8 from '../assets/dog8.png';

// Map of image imports
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

const PetListPage = ({ pets }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {pets.map((pet) => (
        <Link
          key={pet.id}
          to={`/pets/${pet.id}`}
          className='bg-white shadow-lg rounded-lg p-4'
        >
          <img
            src={petImages[pet.id]}
            alt={pet.name}
            className='rounded-lg w-full h-56 object-cover'
          />
          <p className='mt-4 font-bold text-gray-800'>{pet.name}</p>
          <p className='text-gray-600'>Gene: {pet.gene}</p>
          <p className='text-gray-600'>Age: {pet.age}</p>
          <p className='text-blue-500 mt-2'>{pet.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default PetListPage;
