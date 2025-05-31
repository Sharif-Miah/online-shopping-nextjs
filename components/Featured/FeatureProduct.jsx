import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';
import FeatureCarosel from './FeatureCarosel';
import { getAllFetureProduct } from '@/app/db/quries';

const FeatureProduct = async () => {
  const feturesProducts = await getAllFetureProduct();

  console.log(feturesProducts);

  return (
    <section className='mt-6 py-6'>
      <div className='bg-white rounded py-6'>
        <SheardTitle title='Feature Product' />
        <ViewButton />
        <div className='mt-6'>
          <FeatureCarosel />
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
