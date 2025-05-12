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
        <CardWithFlasDeal
          img='https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-648861be889e2.png'
          percen='10'
          title='Exclusive &...'
          price='500.00'
          discountPrice='400.00'
        />
        <CardWithFlasDeal
          img='https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-6488413bebea3.png'
          percen='10'
          title='Exclusive &...'
          price='500.00'
          discountPrice='400.00'
        />
        <CardWithFlasDeal
          img='https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884cfe79147.png'
          percen='10'
          title='Exclusive &...'
          price='500.00'
          discountPrice='400.00'
        />
        <CardWithFlasDeal
          img='https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884ed82e40d.png'
          percen='10'
          title='Exclusive &...'
          price='500.00'
          discountPrice='400.00'
        />
        <CardWithFlasDeal
          img='https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884610598d4.png'
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
