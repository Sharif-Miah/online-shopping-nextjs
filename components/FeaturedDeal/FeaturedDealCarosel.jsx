import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';

import FeaturedCardItem from './FeaturedCardItem';
import AutoPlayCarosel from '../Featured/Carousel';

const FeaturedDealCarosel = ({ product }) => {
  return (
    <AutoPlayCarosel>
      <CarouselContent className='-ml-1'>
        {product.map((prod) => (
          <FeaturedCardItem
            key={prod}
            prod={prod}
          />
        ))}
      </CarouselContent>
    </AutoPlayCarosel>
  );
};

export default FeaturedDealCarosel;
