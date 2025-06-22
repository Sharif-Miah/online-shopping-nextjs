import { getAllCategoriesBaseProduct } from '@/app/db/quries';
import ViewButton from '../sheard/ViewButton';

import FeaturedDealCarosel from './FeaturedDealCarosel';

const FeaturedDeal = async () => {
  return (
    <section className=' my-6 bg-[#e5f1ff] py-6 rounded'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>Featured Deal</h2>
      <ViewButton />
      <p className=' ml-5 text-lg font-medium'>
        See the latest deals and exciting new offers!
      </p>
      <div className=' grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto mt-6 cursor-pointer '>
        <FeaturedDealCarosel />
      </div>
    </section>
  );
};

export default FeaturedDeal;
