import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import AutoPlayCarosel from '../Featured/Carousel';
import WomenCaroselContent from './WomenCaroselContent';

const WomenCarosel = ({ fetures }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {fetures.map((feture) => (
          <WomenCaroselContent
            feture={feture}
            key={feture.id}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoPlayCarosel>
  );
};

export default WomenCarosel;
