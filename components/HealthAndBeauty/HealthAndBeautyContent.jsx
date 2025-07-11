import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';

const HealthAndBeautyContent = ({ feture }) => {
  return (
    <CarouselItem className=' pl-1 basis-1/1  md:basis-1/2 lg:basis-1/6'>
      <div className='p-1 '>
        <Card className='w-[170px] h-[210px] border-none shadow-none'>
          <CardContent className='flex aspect-square items-center justify-center p-6 '>
            <div>
              <Image
                src={feture.imageUrl}
                alt={feture.title}
                width={100}
                height={100}
              />
              <h4 className='font-sm text-center cursor-pointer'>
                {feture.title.slice(0, 20)}
              </h4>
              <p className='text-sm mt-1 font-bold text-center text-slate-600'>
                ${feture.price}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default HealthAndBeautyContent;
