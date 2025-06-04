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
import CaroseContent from './FeaturedCardItem/CaroseContent';
import Link from 'next/link';

const FeatureCarosel = async ({ fetures }) => {
  return (
    <Carousel className='w-full  max-w-6xl min-h-8 mx-auto'>
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
    </Carousel>
  );
};

export default FeatureCarosel;
