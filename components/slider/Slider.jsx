'use client';

import slider1 from '@/public/bannerimg.webp';
import slider2 from '@/public/slider2.jpg';
import slider3 from '@/public/slider3.jpg';
import { Card, CardContent } from '@/components/ui/card';
// import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const Slider = () => {
  const sliders = [
    {
      id: 1,
      img: slider1,
    },
    {
      id: 2,
      img: slider2,
    },
    {
      id: 3,
      img: slider3,
    },
  ];

  return (
    <Carousel className='w-full  max-w-6xl min-h-8 mx-auto '>
      <CarouselContent className='-ml-1'>
        {sliders.map((sli) => (
          <CarouselItem
            key={sli.id}
            className=' pl-1 md:basis-1/1 lg:basis-1/1'>
            <div className='p-1'>
              <Card className=' py-0 h-[400px] border-none shadow-none '>
                <CardContent className=''>
                  <Image
                    src={sli.img}
                    className='rounded'
                    alt=''
                    width={1600}
                    height={700}
                  />
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

export default Slider;
