// 'use client';

import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import CaroseContent from './FeaturedCardItem/CaroseContent';
import Link from 'next/link';

import AutoPlayCarosel from './Carousel';

const FeatureCarosel = ({ fetures }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {fetures.map((feture) => (
          <Link
            key={feture.id}
            href={`/feature-details/${feture.id}`}>
            <CaroseContent feture={feture} />
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoPlayCarosel>
  );
};

export default FeatureCarosel;
