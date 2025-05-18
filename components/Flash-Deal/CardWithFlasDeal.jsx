import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

import { FaStar } from 'react-icons/fa';
import PriceItemComponent from '../sheard/PriceItemComponent';
import Link from 'next/link';

const CardWithFlasDeal = ({ photo }) => {
  console.log(photo);
  return (
    <Card className='w-[220px] rounded mb-6 mx-auto '>
      <CardContent className='px-2'>
        <div>
          <div className=' mt-3 relative'>
            <span className='text-md font-medium absolute z-[100] bg-[#1455ac] py-1  px-2   text-white rounded'>
              -{photo.percent}%
            </span>
            <Image
              src={photo.imageUrl}
              alt='cart-img'
              className='rounded-xl mx-auto'
              width={170}
              height={100}
            />
          </div>
        </div>
        <div className='flex justify-center gap-4 mt-5'>
          <div>({photo.rating})</div>
          <div className='flex gap-[6px] justify-center text-[#ff7d1e] my-2 text-sm '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <Link href={`/flash-details/${photo.id}`}>
          <h5 className='text-black text-xl font-medium text-center'>
            {photo.title}
          </h5>
        </Link>
        <div className='flex justify-center'>
          <PriceItemComponent
            price={photo.price}
            discountPrice={photo.discount}
          />
        </div>
      </CardContent>
      <CardFooter className='justify-center'>
        <Link href='/'>
          <button className='bg-[#1455ac]  py-1 px-3 rounded text-white font-medium text-md'>
            Buy Now
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardWithFlasDeal;
