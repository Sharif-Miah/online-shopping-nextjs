import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';

import FeaturedCardItem from './FeaturedCardItem';
import AutoPlayCarosel from '../Featured/Carousel';

const FeaturedDealCarosel = () => {
  return (
    <div className='ml-14'>
      <AutoPlayCarosel>
        <CarouselContent className='-ml-1'>
          <FeaturedCardItem />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </AutoPlayCarosel>
    </div>
  );
};

export default FeaturedDealCarosel;
