import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import nakles from '@/public/nekles.png';

const DealOftheDayCart = () => {
  return (
    <Card className='border-[#1455ac] bg-[#f3f8fe]'>
      <CardHeader className='p-0 pt-4'>
        <CardTitle className='text-[#1455ac] text-center'>
          Deal of the day
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 bg-white m-6 p-6 rounded'>
        <div className=' flex items-center space-x-4  rounded-md '>
          <div className='relative'>
            <span className='text-md font-medium absolute mt-2 ml-2 z-[100] bg-[#1455ac] py-1  px-2   text-white rounded'>
              -10%
            </span>
            <Image
              src={nakles}
              alt=''
              className='border '
            />
          </div>
        </div>
        <div>
          <h4 className='font-semibold text-center'>
            Stone Crystal Unique Design Necklace Woman Exquisite Wild Short
            Clavicle Chain
          </h4>
          <div className='mt-2 flex justify-center'>
            <div className='flex gap-1'>
              <p className='text-sm mt-1 line-through text-gray-400'>${450}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DealOftheDayCart;
