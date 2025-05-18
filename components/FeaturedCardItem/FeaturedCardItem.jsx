import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import PriceItemComponent from '../sheard/PriceItemComponent';

const FeaturedCardItem = () => {
  return (
    <section>
      <Card className='w-[270px] h-[110px] rounded-xl mb-6 mx-auto bg-white hover:underline'>
        <CardContent className='px-2'>
          <div className='flex gap-3'>
            <div className=' mt-1 relative w-1/3 '>
              <span className='text-md font-medium absolute z-[100] bg-[#1455ac]   px-2   text-white rounded'>
                -5%
              </span>
              <Image
                src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
                alt='cart-img'
                width={100}
                height={100}
                className='rounded-xl w-[100px]'
              />
            </div>
            <div className='mt-5 w-2/3 '>
              <h5 className='text-black text-sm font-thin w-[180px]'>heloo</h5>
              <PriceItemComponent
                price='8'
                discountPrice='8'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturedCardItem;
