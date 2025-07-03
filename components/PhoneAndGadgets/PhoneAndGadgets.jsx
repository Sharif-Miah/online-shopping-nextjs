import { getAllPhoneAndGadgets } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';

import PhoneAndGadgetCarosel from './PhoneAndGadgetCarosel';
import Link from 'next/link';

const PhoneAndGadgets = async () => {
  const phone = await getAllPhoneAndGadgets();

  return (
    <section className='mt-6 py-6'>
      <div className='bg-white rounded py-6'>
        <SheardTitle title='Phone & Gadgets' />
        <Link href='/phone-and-gadets'>
          <ViewButton />
        </Link>
        <div className='mt-6'>
          <PhoneAndGadgetCarosel fetures={phone} />
        </div>
      </div>
    </section>
  );
};

export default PhoneAndGadgets;
