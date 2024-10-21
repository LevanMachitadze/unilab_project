import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import dog6 from '../assets/dog6.png';
import dog7 from '../assets/dog7.png';
import dog8 from '../assets/dog8.png';
import Banner from './Banner';

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
  const [gender, setGender] = useState([]);
  const [colors, setColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [breed, setBreed] = useState([]);

  const handleGenderChange = (e) => {
    const { value } = e.target;
    setGender((prev) =>
      prev.includes(value) ? prev.filter((g) => g !== value) : [...prev, value]
    );
  };

  const handleColorChange = (e) => {
    const { value } = e.target;
    setColors((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleBreedChange = (e) => {
    const { value } = e.target;
    setBreed((prev) =>
      prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!pets || pets.length === 0) {
    return <div>No pets available</div>;
  }

  return (
    <>
      <Banner />
      <div className='flex'>
        <div className='p-6 bg-white rounded-lg shadow-md w-64'>
          <h2 className='text-xl font-bold mb-4'>Filter</h2>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Gender</h3>
            <div>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  value='Male'
                  onChange={handleGenderChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Male</span>
              </label>
            </div>
            <div>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  value='Female'
                  onChange={handleGenderChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Female</span>
              </label>
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Color</h3>
            <div className='flex flex-col gap-2'>
              {[
                'Red',
                'Apricot',
                'Black',
                'Black & White',
                'Silver',
                'Tan',
              ].map((color) => (
                <label key={color} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    value={color}
                    onChange={handleColorChange}
                    className='form-checkbox'
                  />
                  <span className='ml-2'>{color}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Price</h3>
            <div className='flex space-x-2'>
              <input
                type='number'
                name='min'
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder='Min'
                className='w-full p-2 border rounded-md'
              />
              <input
                type='number'
                name='max'
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder='Max'
                className='w-full p-2 border rounded-md'
              />
            </div>
          </div>

          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2'>Breed</h3>
            <div>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  value='Small'
                  onChange={handleBreedChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Small</span>
              </label>
            </div>
            <div>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  value='Medium'
                  onChange={handleBreedChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Medium</span>
              </label>
            </div>
            <div>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  value='Large'
                  onChange={handleBreedChange}
                  className='form-checkbox'
                />
                <span className='ml-2'>Large</span>
              </label>
            </div>
          </div>
        </div>
        <div className='mt-[32px]'>
          <div className='flex justify-between  items-center'>
            <div className='flex max-w-[200px] w-full justify-between items-center'>
              <h3 className='text-[#003459] text-[20px] font-bold'>
                Small Dogs
              </h3>
              <span>52puppies</span>
            </div>
            <div>
              <button className='border-2 border-solid border-gray-950 rounded-[20px] w-[158px] h-[34px]'>
                sort by: Popular
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[32px]'>
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
        </div>
      </div>
    </>
  );
};

export default PetListPage;
