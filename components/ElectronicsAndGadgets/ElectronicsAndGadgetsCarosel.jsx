import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import AutoPlayCarosel from '../Featured/Carousel';
import ElectronicsAndGadgetsContent from './ElectronicsAndGadgetsContent';

const ElectronicsAndGadgetsCarosel = ({ fetures }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {fetures.map((feture) => (
          <Link
            href={`/electronics-gadgets/${feture.id}`}
            key={feture.id}>
            <ElectronicsAndGadgetsContent feture={feture} />
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoPlayCarosel>
  );
};

export default ElectronicsAndGadgetsCarosel;
