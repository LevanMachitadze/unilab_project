import React, { useEffect, useState } from 'react';
import axios from 'axios';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import giftIcon from '../assets/gift.svg';

const productImages = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
  7: product7,
  8: product8,
};

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/db2.json')
      .then((response) => {
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => console.error('Error fetching product data: ', error));
  }, []);

  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h2 className='text-center text-3xl font-bold text-gray-800 mb-8'>
          Our Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div key={product.id} className='bg-white shadow-lg rounded-lg p-4'>
              <img
                src={productImages[product.id]}
                alt={product.name}
                className='rounded-lg w-full h-56 object-cover'
              />
              <p className='mt-4 font-bold text-gray-800'>{product.name}</p>
              <div className='flex justify-between'>
                <span>Category: {product.category}</span>

                {product.size && (
                  <p className='text-gray-600'>• Size: {product.size}</p>
                )}
              </div>
              <p className='font-bold mt-2'>{product.price}</p>
              <div className='flex bg-[#FCEED5] rounded-[8px] pl-4 pr-14 justify-between'>
                <img src={giftIcon} alt='gift' />
                <span>• Free Toy & Free Shaker</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
