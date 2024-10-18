import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

const PetDetailPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get('/db.json')
      .then((response) => {
        const foundPet = response.data.pets.find((p) => p.id === id);
        setPet(foundPet);
      })
      .catch((error) => console.error('Error fetching pet data: ', error));
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <section className='py-12'>
      <div className='container mx-auto max-w-[1172px]'>
        <div className='flex'>
          
          <div className='w-2/3'>
            <img
              src={petImages[pet.id]}
              alt={pet.name}
              className='rounded-lg w-full h-auto object-cover'
            />
            <h2 className='text-3xl font-bold text-gray-800 mt-4'>
              {pet.name}
            </h2>
            <p className='text-xl text-blue-500 font-semibold'>{pet.price}</p>

            <table className='table-auto mt-6'>
              <tbody>
                <tr>
                  <td className='font-bold pr-4'>Gene:</td>
                  <td>{pet.gene}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Age:</td>
                  <td>{pet.age}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Location:</td>
                  <td>{pet.location}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Published Date:</td>
                  <td>{pet.publishedDate}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Warranty:</td>
                  <td>{pet.warranty}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Vaccinated:</td>
                  <td>{pet.vaccinated ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <td className='font-bold pr-4'>Dewormed:</td>
                  <td>{pet.dewormed ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>

        
          <div className='w-1/3 pl-8'>
            <div className='border p-4 rounded-lg'>
              <h4 className='text-lg font-bold mb-2'>Certifications</h4>
              <ul className='list-disc pl-5'>
                {pet.certifications.map((cert, index) => (
                  <li key={index} className='text-gray-600'>
                    {cert}
                  </li>
                ))}
              </ul>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailPage;
