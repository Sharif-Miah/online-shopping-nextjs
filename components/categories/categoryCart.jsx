import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const CategoryCart = ({ category }) => {
  return (
    <Card className='w-[150px] h-[230px] mb-6 mx-auto rounded'>
      <CardContent className='px-2'>
        <div>
          <div className=' mt-3 relative'>
            <Image
              src={category.imageUrl}
              alt='cart-img'
              className='rounded-xl mx-auto transition duration-500 hover:scale-75 cursor-pointer'
              width={190}
              height={190}
            />
          </div>
        </div>

        <h5 className='text-center text-sm font-semibold'>{category.title}</h5>
        <h5 className='text-center text-sm font-semibold'>
          price: ${category.price}
        </h5>
      </CardContent>
    </Card>
  );
};

export default CategoryCart;
