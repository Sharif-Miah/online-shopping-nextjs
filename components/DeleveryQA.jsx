import Image from 'next/image';
import authentic from '@/public/delivaryimg/authentic.png';
import card from '@/public/delivaryimg/card.png';
import delivaryImg from '@/public/delivaryimg/deliveryimg.png';
import returnn from '@/public/delivaryimg/return.png';

const DeleveryQA = () => {
  return (
    <div className='bg-white rounded py-6 px-4'>
      <div className='flex'>
        <Image
          src={delivaryImg}
          width={40}
          height={40}
          alt='car img'
          className=' mt-2'
        />
        <p className='text-sm mt-3 ml-2'>
          Fast Delivery all across the country
        </p>
      </div>
      <div className='flex mt-2'>
        <Image
          src={card}
          width={40}
          height={40}
          alt='car img'
          className=' mt-2'
        />
        <p className='text-sm mt-3 ml-2'> Safe Payment</p>
      </div>
      <div className='flex mt-2'>
        <Image
          src={returnn}
          width={40}
          height={40}
          alt='car img'
          className=' mt-2'
        />
        <p className='text-sm mt-3 ml-2'> 7 Days Return Policy</p>
      </div>
      <div className='flex mt-2'>
        <Image
          src={authentic}
          width={40}
          height={40}
          alt='car img'
          className=' mt-2'
        />
        <p className='text-sm mt-3 ml-2'>100% Authentic Products</p>
      </div>
    </div>
  );
};

export default DeleveryQA;
