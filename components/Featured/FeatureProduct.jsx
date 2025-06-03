import { getALLfeatureImage, getAllfetureProduct } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';
import FeatureCarosel from './FeatureCarosel';

const FeatureProduct = async () => {
  const feture = await getALLfeatureImage();
  console.log(feture);

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
