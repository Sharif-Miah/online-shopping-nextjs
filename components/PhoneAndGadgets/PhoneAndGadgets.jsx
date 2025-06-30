import { getAllWomanFashion } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';

import PhoneAndGadgetCarosel from './PhoneAndGadgetCarosel';

const PhoneAndGadgets = async () => {
  const fetures = await getAllWomanFashion();

  return (
    <section className='mt-6 py-6'>
      <div className='bg-white rounded py-6'>
        <SheardTitle title='Phone & Gadgets' />
        <ViewButton />
        <div className='mt-6'>
          <PhoneAndGadgetCarosel fetures={fetures} />
        </div>
      </div>
    </section>
  );
};

export default PhoneAndGadgets;
