import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

import { CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { getCategoriesById } from '@/app/db/quries';
import ProductCalculate from '@/components/ProductCalculate';
import DeleveryQA from '@/components/DeleveryQA';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';

const CategoryBaseProduct = async ({ params: { id } }) => {
  const categoryProduct = await getCategoriesById(id);

  return (
    <div className='container mx-auto py-12'>
      <section className='max-w-7xl mx-auto'>
        <div className='my-8'>
          <div className='flex flex-col md:flex-row  gap-2'>
            <div className='flex-shrink-0 w-full md:w-1/3 '>
              {/* Single Image Carosel  */}
              <Image
                src={categoryProduct.imageUrl}
                alt=''
                width={500}
                height={400}
              />
            </div>

            <div className='flex-grow w-full md:w-2/3  ml-5'>
              <div className='flex flex-col md:flex-row gap-2'>
                {/* Middle Column  */}
                <ProductCalculate product={categoryProduct} />
                {/* Last column  */}
                <div className='flex-shrink-0 w-full md:w-1/3 '>
                  <DeleveryQA />
                  {/* <SimilarProduct /> */}
                </div>
              </div>
            </div>
          </div>
          <p className='w-2/3 sm:mx-auto lg:ml-24 text-md leading-6'>
            {categoryProduct.details}
          </p>
          <QuestionAnswer />
        </div>
      </section>
    </div>
  );
};

export default CategoryBaseProduct;
