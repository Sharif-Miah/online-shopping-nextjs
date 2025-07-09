import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import AutoPlayCarosel from '../Featured/Carousel';
import MensFashionContent from './MensFashionContent';

const MensFashionCarosel = ({ fetures }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {fetures.map((feture) => (
          <Link
            href={`/Mens-fashion/${feture.id}`}
            key={feture.id}>
            <MensFashionContent feture={feture} />
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoPlayCarosel>
  );
};

export default MensFashionCarosel;
