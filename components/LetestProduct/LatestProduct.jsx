import DealOftheDayCart from './DealOftheDayCart';
import LetestProductCart from './LetestProductCart';

const LatestProduct = () => {
  return (
    <section className='my-5'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <div className='w-full md:w-1/4 lg:w-1/4'>
          <DealOftheDayCart />
        </div>
        <div className='w-full md:w-3/4 lg:w-3/4 ml-6'>
          <h2 className='text-[#1455ac] font-bold text-2xl my-4'>
            Latest Products
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <LetestProductCart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
