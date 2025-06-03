import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import PriceItemComponent from '../sheard/PriceItemComponent';

const FeatureCarosel = async () => {
  return (
    <Carousel className='w-full  max-w-6xl min-h-8 mx-auto'>
      <CarouselContent className='-ml-1'>
        {Array.from({ length: 14 }).map((cartProducts, index) => (
          <CarouselItem
            key={index}
            className=' pl-1 basis-1/1  md:basis-1/2 lg:basis-1/6'>
            <div className='p-1 '>
              <Card className='w-[150px] h-[190px] '>
                <CardContent className='flex aspect-square items-center justify-center p-6 '>
                  <div>
                    <Image
                      src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1748706437/facewash_umdddt.webp'
                      alt=''
                      width={100}
                      height={100}
                    />
                    <h4 className='font-medium hover:text-[#f58300] cursor-pointer'>
                      TWS Ear Buds
                    </h4>
                    <PriceItemComponent
                      price='500.00'
                      discountPrice='450.00'
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeatureCarosel;
