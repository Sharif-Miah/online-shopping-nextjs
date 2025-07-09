import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import AutoPlayCarosel from '../Featured/Carousel';
import KIdsFashionContent from './KIdsFashionContent';

const KIdsFashionCarosel = ({ fetures }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {fetures.map((feture) => (
          <Link
            href={`/Kids-fashion/${feture.id}`}
            key={feture.id}>
            <KIdsFashionContent feture={feture} />
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoPlayCarosel>
  );
};

export default KIdsFashionCarosel;
