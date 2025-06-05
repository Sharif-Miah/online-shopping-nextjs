import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const NewArrivalsCart = () => {
  return (
    <section>
      <Card className='w-[270px] h-[110px] rounded-xl mb-6 mx-auto bg-white hover:underline'>
        <CardContent className='px-2'>
          <div className='flex gap-3'>
            <div className=' mt-1 relative w-1/3 '>
              <span className='text-md font-medium absolute z-[100] bg-[#1455ac]   px-2   text-white rounded'>
                -{50}%
              </span>
              <Image
                src={`https://6valley.6amtech.com/storage/app/public/product/thumbnail/2024-09-22-66f009f710ea0.webp`}
                alt='cart-img'
                className='rounded-xl w-[100px]'
                width={100}
                height={100}
              />
            </div>
            <div className='mt-5 w-2/3 '>
              <h5 className='text-black text-sm font-thin w-[180px]'>
                {`Another product carosel`}
              </h5>
              <p className='text-sm mt-1 line-through text-gray-400'>${20}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default NewArrivalsCart;
