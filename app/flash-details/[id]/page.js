import { getFlashById } from '@/app/db/quries';
import DeleveryQA from '@/components/DeleveryQA';
import ProductCalculate from '@/components/ProductCalculate';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import SimilarProduct from '@/components/SimilarProduct';

import Image from 'next/image';

const FlashDetailsPage = async ({ params: { id } }) => {
  const flashProduct = await getFlashById(id);
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='my-8'>
        <div className='flex flex-col md:flex-row  gap-2'>
          <div className='flex-shrink-0 w-full md:w-1/3 '>
            {/* Single Image Carosel  */}
            <Image
              src={flashProduct.imageUrl}
              alt=''
              width={500}
              height={400}
            />
          </div>

          <div className='flex-grow w-full md:w-2/3  ml-5'>
            <div className='flex flex-col md:flex-row gap-2'>
              {/* Middle Column  */}
              <ProductCalculate />
              {/* Last column  */}
              <div className='flex-shrink-0 w-full md:w-1/3 '>
                <DeleveryQA />
                {/* <SimilarProduct /> */}
              </div>
            </div>
          </div>
        </div>
        <p className='w-2/3 sm:mx-auto lg:ml-24 text-md leading-6'>
          {flashProduct.details}
        </p>
        <QuestionAnswer />
      </div>
    </section>
  );
};

export default FlashDetailsPage;
