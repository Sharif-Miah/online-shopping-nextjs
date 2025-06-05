import AutoPlayCarosel from '../Featured/Carousel';
import { CarouselContent, CarouselItem } from '../ui/carousel';
import NewArrivalsCart from './NewArrivalsCart';

const NewArrivals = () => {
  return (
    <section className='my-5'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl my-6'>
        New arrivals
      </h2>
      <AutoPlayCarosel>
        <CarouselContent className=''>
          {Array.from({ length: 10 }).map((cartProducts, index) => (
            <CarouselItem
              key={index}
              className=' pl-1 basis-1/1  md:basis-1/2 lg:basis-1/4'>
              <div className='p-1 '>
                <NewArrivalsCart />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </AutoPlayCarosel>
    </section>
  );
};

export default NewArrivals;
