import banner1 from '@/public/banner-img/banner-1.webp';
import banner2 from '@/public/banner-img/banner-2.webp';
import banner3 from '@/public/banner-img/banner-3.webp';
import banner4 from '@/public/banner-img/banner-4.jpg';
import banner5 from '@/public/banner-img/banner-5.jpg';
import { Card, CardContent } from '@/components/ui/card';

import {
  CarouselContent,
  CarouselNext,
  CarouselItem,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import AutoPlayCarosel from '../Featured/Carousel';

const Slider = () => {
  const sliders = [
    {
      id: 1,
      img: banner1,
    },
    {
      id: 2,
      img: banner2,
    },
    {
      id: 3,
      img: banner3,
    },
    {
      id: 4,
      img: banner4,
    },
    {
      id: 5,
      img: banner5,
    },
  ];

  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {sliders.map((sli) => (
          <CarouselItem
            key={sli.id}
            className=' pl-1 md:basis-1/1 lg:basis-1/1'>
            <div className='p-1'>
              <Card className=' py-0 lg:h-[400px] border-none shadow-none '>
                <CardContent>
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
    </AutoPlayCarosel>
  );
};

export default Slider;
