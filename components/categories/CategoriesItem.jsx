import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import img from '@/public/categories-img/man.png';

const CategoriesItem = () => {
  return (
    <div className='sm:mx-auto lg:ml-0 lg:relative'>
      <Card className='border-none cursor-pointer lg:absolute p-0 w-[150px]'>
        <CardContent className='transform  transition  duration-300 hover:text-[#ff7d1e] hover:font-semibold '>
          <div className=''>
            <Image
              src={img}
              alt='categories products image'
              className='w-32 rounded hover:scale-95'
            />
            <h5 className='text-center text-sm font-semibold'>
              {'man fashion'}
            </h5>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesItem;
