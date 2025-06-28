import { getAllNewArrivals } from '@/app/db/quries';
import AutoPlayCarosel from '../Featured/Carousel';
import { CarouselContent } from '../ui/carousel';

import brand1 from '@/public/brands/brand-1.webp';
import brand2 from '@/public/brands/brand-2.webp';
import brand3 from '@/public/brands/brand-3.webp';
import brand4 from '@/public/brands/brand-4.webp';
import brand5 from '@/public/brands/brand-5.webp';
import brand6 from '@/public/brands/brand-6.webp';
import brand7 from '@/public/brands/brand-7.webp';
import brand8 from '@/public/brands/brand-8.webp';
import brand9 from '@/public/brands/brand-9.webp';
import brand10 from '@/public/brands/brand-10.webp';
import brand11 from '@/public/brands/brand-11.webp';
import brand12 from '@/public/brands/brand-12.webp';
import brand13 from '@/public/brands/brand-13.webp';
import brand14 from '@/public/brands/brand-14.webp';
import BrandCart from './BrandCart';

const Brands = () => {
  const brandImages = [
    {
      id: 1,
      image: brand1,
    },

    {
      id: 3,
      image: brand3,
    },
    {
      id: 4,
      image: brand4,
    },
    {
      id: 5,
      image: brand5,
    },
    {
      id: 6,
      image: brand6,
    },
    {
      id: 7,
      image: brand7,
    },
    {
      id: 8,
      image: brand8,
    },
    {
      id: 9,
      image: brand9,
    },
    {
      id: 10,
      image: brand10,
    },
    {
      id: 11,
      image: brand11,
    },
    {
      id: 13,
      image: brand13,
    },
    {
      id: 14,
      image: brand14,
    },
  ];

  return (
    <section className='my-5'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl my-6'>Brands</h2>
      <AutoPlayCarosel>
        <CarouselContent className=''>
          {brandImages.map((brand) => (
            <BrandCart
              brand={brand}
              key={brand.id}
            />
          ))}
        </CarouselContent>
      </AutoPlayCarosel>
    </section>
  );
};

export default Brands;
