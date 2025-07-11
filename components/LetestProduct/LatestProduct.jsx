import { getAllLatestProduct } from '@/app/db/quries';
import DealOftheDayCart from './DealOftheDayCart';
import LetestProductCart from './LetestProductCart';
import Link from 'next/link';
import ViewButton from '../sheard/ViewButton';

const LatestProduct = async () => {
  const latestProducts = await getAllLatestProduct();

  return (
    <section className='my-5'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <div className='w-full md:w-1/4 lg:w-1/4'>
          {latestProducts.slice(1, 2).map((product) => (
            <DealOftheDayCart
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className='w-full md:w-3/4 lg:w-3/4 ml-6'>
          <h2 className='text-[#1455ac]  my-4'>
            <span className='font-bold text-2xl'> Latest Products</span>
            <span className='sm:hidden lg:block'>
              <Link href={'/latestproduct'}>
                <ViewButton />
              </Link>
            </span>
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {latestProducts.slice(0, 8).map((product) => (
              <LetestProductCart
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
