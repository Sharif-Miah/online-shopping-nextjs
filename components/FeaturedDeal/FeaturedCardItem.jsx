import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

import { CarouselItem } from '@/components/ui/carousel';

const FeaturedCardItem = ({ prod }) => {
  return (
    <CarouselItem className='z-10 pl-1 basis-1/1  md:basis-1/2 lg:basis-1/4'>
      <div className='p-1 '>
        <Card className='w-[270px] h-[110px] rounded-xl mb-6 mx-auto bg-white'>
          <CardContent className='px-2'>
            <div className='flex gap-3'>
              <div className=' mt-1 relative w-1/3 '>
                <span className='text-md font-medium absolute z-[100] bg-[#1455ac]   px-2   text-white rounded'>
                  -{5}%
                </span>
                <Image
                  src={prod.imageUrl}
                  alt={prod.title}
                  className='rounded-xl w-[100px]'
                  width={100}
                  height={100}
                />
              </div>
              <div className='mt-5 w-2/3 '>
                <h5 className='text-black text-sm font-thin w-[180px]'>
                  {prod.title}
                </h5>
                <div className='flex gap-1'>
                  <p className='text-sm mt-1 text-gray-400'>${prod.price}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default FeaturedCardItem;
