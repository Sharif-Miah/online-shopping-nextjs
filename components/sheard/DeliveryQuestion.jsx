import React from 'react';
import delivary from '@/public/delivaryimg/deliveryimg.png';
import card from '@/public/delivaryimg/card.png';
import returnn from '@/public/delivaryimg/return.png';
import authentic from '@/public/delivaryimg/authentic.png';
import Image from 'next/image';

const DeliveryQuestion = () => {
  return (
    <section className='bg-[#ecf5ff] py-20 px-6 mb-6 rounded'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div className='border-r-0 md:border-r-2 lg:border-r-2 border-[#c9e2ff]'>
          <div className='flex justify-center mb-2'>
            <Image
              src={delivary}
              alt=''
            />
          </div>
          <h4 className='text-md font-medium text-center '>
            Fast Delivery all across the country
          </h4>
        </div>
        <div className='border-r-0 md:border-r-2 lg:border-r-2 border-[#c9e2ff]'>
          <div className='flex justify-center mb-2'>
            <Image
              src={card}
              alt=''
            />
          </div>
          <h4 className='text-md font-medium text-center '>Safe Payment</h4>
        </div>
        <div className='border-r-0 md:border-r-2 lg:border-r-2 border-[#c9e2ff]'>
          <div className='flex justify-center mb-2'>
            <Image
              src={returnn}
              alt=''
            />
          </div>
          <h4 className='text-md font-medium text-center '>
            7 Days Return Policy
          </h4>
        </div>
        <div className=''>
          <div className='flex justify-center mb-2'>
            <Image
              src={authentic}
              alt=''
            />
          </div>
          <h4 className='text-md font-medium text-center '>
            100% Authentic Products
          </h4>
        </div>
      </div>
    </section>
  );
};

export default DeliveryQuestion;
