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
          <Link
            key={prod.id}
            href={`/featured-deal/${prod.id}`}>
            <FeaturedCardItem feture={prod} />
          </Link>
        ))}
      </CarouselContent>
    </AutoPlayCarosel>
  );
};

export default FeaturedDealCarosel;
