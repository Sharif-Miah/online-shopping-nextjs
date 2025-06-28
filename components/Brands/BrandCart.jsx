import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { CarouselItem } from '../ui/carousel';

const BrandCart = ({ brand }) => {
  return (
    <CarouselItem className=' pl-1 basis-1/1 gap-4  md:basis-1/2 lg:basis-1/12'>
      <div className='p-1 '>
        <Card className='w-[100px] h-[100px] rounded-full mb-6 mx-auto bg-white '>
          <CardContent className='px-2'>
            <Image
              src={brand.image}
              alt='cart-img'
              className='rounded-xl w-full'
              width={700}
              height={700}
            />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default BrandCart;
