import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouFindUs: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -6.1862,
    lng: 106.8219,
  };

  return (
    <section className='py-12'>
      <div className='container mx-auto max-w-[1172px] grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-3xl font-bold mb-4'>
            Get in <span className='text-blue-600'>Touch</span>
          </h2>
          <p className='mb-6'>
            Enim tempor eget pharetra facilisis sed maecenas adipiscing.
          </p>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full border rounded-lg p-3'
                placeholder='Name*'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full border rounded-lg p-3'
                placeholder='Email*'
                required
              />
            </div>
            <div className='mb-4'>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border rounded-lg p-3'
                placeholder='Phone number*'
                required
              />
            </div>
            <div className='mb-4'>
              <select
                name='howDidYouFindUs'
                value={formData.howDidYouFindUs}
                onChange={handleChange}
                className='w-full border rounded-lg p-3'
              >
                <option value=''>How did you find us?</option>
                <option value='google'>Google</option>
                <option value='social'>Social Media</option>
                <option value='friend'>Friend</option>
              </select>
            </div>
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-4 rounded-lg w-full'
            >
              SEND
            </button>
          </form>

          <div className='mt-8 flex justify-between'>
            <div className='flex items-center mb-2 flex-col '>
              <i className='fas fa-phone mr-2 font-bold'>Phone</i>
              <span>03 5432 1234</span>
            </div>
            <div className='flex items-center mb-2 flex-col'>
              <i className='fas fa-fax mr-2 font-bold'>Fax</i>
              <span>03 5432 1234</span>
            </div>
            <div className='flex items-center flex-col'>
              <i className='fas fa-envelope mr-2 font-bold'>Email</i>
              <span>info@marcor.com.au</span>
            </div>
          </div>
        </div>

        <div>
          <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
