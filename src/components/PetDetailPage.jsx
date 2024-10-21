import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';
import dog4 from '../assets/dog4.png';
import dog5 from '../assets/dog5.png';
import dog6 from '../assets/dog6.png';
import dog7 from '../assets/dog7.png';
import dog8 from '../assets/dog8.png';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

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
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-2/3'>
            <img
              src={petImages[pet.id]}
              alt={pet.name}
              className='rounded-lg w-full h-auto object-cover'
            />
          </div>

          <div className='md:w-1/3 md:pl-8'>
            <div className='flex items-start flex-col mt-4'>
              <h2 className='text-3xl font-bold text-gray-800'>{pet.name}</h2>
              <p className='text-xl text-blue-500 font-semibold'>
                {pet.price} VND
              </p>
            </div>
            <div className='flex justify-between '>
              <div className='bg-[#003459] text-white px-4 py-2 mt-6 w-[150px] font-bold text-center rounded-[57px] mb-6 h-[45px]'>
                <Link to='/contactus'>Contact us</Link>
              </div>
              <div className='font-bold text-center rounded-[57px] text-[#003459] bg-white  px-4 py-2 mt-6 border-2 border-[#003459] h-[45px]'>
                <Link to='/chat'>Chat With Monito</Link>
              </div>
            </div>
            <div className='bg-white border rounded-lg shadow-md p-6'>
              <table className='w-full'>
                <tbody>
                  <tr>
                    <td className='font-bold pr-4'>SKU:</td>
                    <td>#{pet.id}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Gender:</td>
                    <td>{pet.gender}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Age:</td>
                    <td>{pet.age}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Size:</td>
                    <td>{pet.size}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Color:</td>
                    <td>{pet.color}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Vaccinated:</td>
                    <td>{pet.vaccinated ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Dewormed:</td>
                    <td>{pet.dewormed ? 'Yes' : 'No'}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Cert:</td>
                    <td>{pet.cert}</td>
                  </tr>
                  <tr>
                    <td className='font-bold pr-4'>Microchip:</td>
                    <td>{pet.microchip ? 'Yes' : 'No'}</td>
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
                    <td className='font-bold pr-4'>Additional Information:</td>
                    <td>{pet.additionalInfo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-8 max-w-[450px] w-full'>
          <div className='flex items-center'>
            <img
              src='/path/to/health-icon.png'
              alt='Health guarantee'
              className='w-6 h-6'
            />
            <p className='ml-2 text-gray-700'>100% health guarantee for pets</p>
          </div>
          <div className='flex items-center'>
            <img
              src='/path/to/identification-icon.png'
              alt='Identification guarantee'
              className='w-6 h-6'
            />
            <p className='ml-2 text-gray-700'>
              100% guarantee of pet identification
            </p>
          </div>
        </div>

        <div className='mt-8'>
          <p className='font-semibold'>Share:</p>
          <div className='flex space-x-4 mt-2'>
            <a href='#'>
              <img src={facebookIcon} alt='Facebook' />
            </a>
            <a href='#'>
              <img src={twitterIcon} alt='Twitter' />
            </a>
            <a href='#'>
              <img src={instagramIcon} alt='Instagram' />
            </a>
            <a href='#'>
              <img src={youtubeIcon} alt='YouTube' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetDetailPage;
