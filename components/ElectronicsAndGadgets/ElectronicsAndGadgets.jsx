import { getAllPhoneAndGadgets } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';
import Link from 'next/link';
import ElectronicsAndGadgetsCarosel from './ElectronicsAndGadgetsCarosel';

const ElectronicsAndGadgets = async () => {
  const phone = await getAllPhoneAndGadgets();

  return (
    <section className='mt-6 py-6'>
      <div className='bg-white rounded py-6'>
        <SheardTitle title='Electronics & Gadgets' />
        <Link href='/phone-and-gadets'>
          <ViewButton />
        </Link>
        <div className='mt-6'>
          <ElectronicsAndGadgetsCarosel fetures={phone} />
        </div>
      </div>
    </section>
  );
};

export default ElectronicsAndGadgets;
