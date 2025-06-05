import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import img from '@/public/feature-img/jacket.webp';

const FeaturedCardItem = () => {
  return (
    <section>
      <Card className='w-[270px] h-[110px] rounded-xl mb-6 mx-auto bg-white '>
        <CardContent className='px-2'>
          <div className='flex gap-3'>
            <div className=' mt-1 relative w-1/3 '>
              <span className='text-md font-medium absolute z-[100] bg-[#1455ac]   px-2   text-white rounded'>
                -{5}%
              </span>
              <Image
                src={img}
                alt='cart-img'
                className='rounded-xl w-[100px]'
                width={100}
                height={100}
              />
            </div>
            <div className='mt-5 w-2/3 '>
              <h5 className='text-black text-sm font-thin w-[180px]'>
                New Design Trendy Casual Sneakers for Men Lightwei
              </h5>
              <div className='flex gap-1'>
                <p className='text-sm mt-1 text-gray-400'>$5.00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturedCardItem;
