import Image from 'next/image';
import Link from 'next/link';
import speacialPromoImg from '@/public/speacial-promo.webp';

const SpecialPromoImg = () => {
  return (
    <section className='my-6'>
      <Link href='#'>
        <Image
          src={speacialPromoImg}
          alt='speacial promo img'
          className='rounded w-full'
        />
      </Link>
    </section>
  );
};

export default SpecialPromoImg;
