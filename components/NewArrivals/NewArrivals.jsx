import { getAllNewArrivals } from '@/app/db/quries';
import AutoPlayCarosel from '../Featured/Carousel';
import { CarouselContent, CarouselItem } from '../ui/carousel';
import NewArrivalsCart from './NewArrivalsCart';
import Link from 'next/link';

const NewArrivals = async () => {
  const products = await getAllNewArrivals();

  return (
    <section className='my-5'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl my-6'>
        New arrivals
      </h2>
      <AutoPlayCarosel>
        <CarouselContent>
          {products.map((product) => (
            <Link
              href={`/nweArrivals/${product.id}`}
              key={product.id}>
              <NewArrivalsCart product={product} />
            </Link>
          ))}
        </CarouselContent>
      </AutoPlayCarosel>
    </section>
  );
};

export default NewArrivals;
