import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import img from '@/public/categories-img/man.png';

const CategoriesItem = ({ category }) => {
  return (
    <div className='lg:container'>
      <div className='border-none cursor-pointer lg:absolute ml-0 p-0 w-[150px] sm:mx-auto'>
        <CardContent className='hover:text-[#ff7d1e] hover:font-semibold '>
          <div>
            <Image
              src={category.imageUrl}
              alt='categories products image'
              className='w-32 rounded transition duration-500 hover:scale-75'
              height={100}
              width={100}
            />
            <h5 className='text-center text-sm font-semibold'>
              {category.title.slice(0, 10)}...
            </h5>
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default CategoriesItem;
