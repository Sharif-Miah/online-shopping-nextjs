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
import Link from 'next/link';

const DealOftheDayCart = ({ product }) => {
  return (
    <Card className='border-[#1455ac] bg-[#f3f8fe]'>
      <CardHeader className='p-0 pt-4'>
        <CardTitle className='text-[#1455ac] text-center'>
          Deal of the day
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4 bg-white m-6 p-6 rounded'>
        <div className=' flex items-center space-x-4  rounded-md '>
          <div className='relative mx-auto'>
            <span className='text-md font-medium absolute mt-2 ml-2 z-[100] bg-[#1455ac] py-1  px-2   text-white rounded'>
              -10%
            </span>
            <Image
              src={product.imageUrl}
              alt={product.title}
              className='border mx-auto'
              width={300}
              height={300}
            />
          </div>
        </div>
        <div>
          <h4 className='font-semibold text-center'>
            <Link href={`/latestproduct/${product.id}`}>{product.title}</Link>
          </h4>
          <div className='mt-2 flex justify-center'>
            <div className='flex gap-1'>
              <p className='text-md mt-1 font-semibold  text-black'>
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
          <Link href='/payment'> Buy Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DealOftheDayCart;
