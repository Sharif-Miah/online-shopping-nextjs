import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import airpods from '@/public/deal-product/airpods.png';
import { FaStar } from 'react-icons/fa';
import PriceItemComponent from '../sheard/PriceItemComponent';
import Link from 'next/link';

const LetestProductCart = () => {
  return (
    <Card className='w-[220px] rounded mb-6 mx-auto '>
      <CardContent className='px-2'>
        <div>
          <div className=' mt-3 relative'>
            <span className='text-md font-medium absolute z-[100] bg-[#1455ac] py-1  px-2   text-white rounded'>
              -{5}%
            </span>
            <Image
              src={airpods}
              alt='cart-img'
              className='rounded-xl'
            />
          </div>
        </div>
        <div className='flex gap-[6px] justify-center text-[#ff7d1e] my-2 text-sm '>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <h5 className='text-black text-xl font-medium text-center'>
          {'airpods is nice'}
        </h5>
        <div className='flex justify-center'>
          <p className='text-sm mt-1 line-through text-gray-400'>${120}</p>
        </div>
      </CardContent>
      <CardFooter className='justify-center'>
        <Link href='#'>
          <button className='bg-[#1455ac]  py-1 px-3 rounded text-white font-medium text-md'>
            Buy Now
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LetestProductCart;
