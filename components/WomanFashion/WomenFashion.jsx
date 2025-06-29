import { getAllWomanFashion } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';
import WomenCarosel from './WomenCarosel';

const WomenFashion = async () => {
  const fetures = await getAllWomanFashion();

  return (
    <section className='mt-6 py-6'>
      <div className='bg-white rounded py-6'>
        <SheardTitle title="Women's Fashion" />
        <ViewButton />
        <div className='mt-6'>
          <WomenCarosel fetures={fetures} />
        </div>
      </div>
    </section>
  );
};

export default WomenFashion;
