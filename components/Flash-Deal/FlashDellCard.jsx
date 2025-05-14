import SheardTitle from '../SheardTitle';
import ViewButton from '../ViewButton';
import CardWithFlasDeal from './CardWithFlasDeal';
import man from '@/public/man.png';

const FlashDellCard = () => {
  return (
    <section className=' bg-gradient-to-r from-[#f0f4fe] to-[#edecfe] py-6 px-6 rounded mt-6'>
      <SheardTitle title='Flash Deal' />
      <div>
        <ViewButton />
      </div>

      <div className='grid grid-cols-1 gap-1 justify-center  lg:grid-cols-4 mt-4'>
        <CardWithFlasDeal
          img={man}
          percen='10'
          title='Exclusive &...'
          price='500.00'
          discountPrice='400.00'
        />
      </div>
    </section>
  );
};

export default FlashDellCard;
