import { getALLFeaturedeal } from '@/app/db/quries';
import ViewButton from '../sheard/ViewButton';

import FeaturedDealCarosel from './FeaturedDealCarosel';

const FeaturedDeal = async () => {
  const product = await getALLFeaturedeal();

  return (
    <section className=' my-6 bg-[#e5f1ff] py-6 rounded'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>Featured Deal</h2>
      <ViewButton />
      <p className=' ml-5 text-lg font-medium'>
        See the latest deals and exciting new offers!
      </p>
      <div>
        <FeaturedDealCarosel product={product} />
      </div>
    </section>
  );
};

export default FeaturedDeal;
