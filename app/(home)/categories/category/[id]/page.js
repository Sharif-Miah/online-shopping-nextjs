import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
      <div className='bg-[#eef6ff] py-8 px-4 rounded-xl sm:my-4 lg:my-0 flex flex-col lg:flex-row justify-between '>
        <div>
          <h2 className='text-[#1455ac] ml-5 font-bold text-xl uppercase'>
            Category Products
          </h2>
          <p className='text-[#1455ac] ml-5 font-semibold'>27 Items found</p>
        </div>
        <div className='flex mt-4 lg:mt-0'>
          <Input
            type='search'
            className='w-full rounded border-blue-600'
            placeholder='Search for items...'
          />
          <span className='bg-blue-600 mb-12 pb-3  rounded cursor-pointer -ml-2'>
            <IoIosSearch className='text-xl text-white  mt-1' />
          </span>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className='bg-white border border-gray-300 px-3 py-2 flex gap-2 items-center'>
              Sort by Price (High to low)
              <IoIosArrowDown />
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-white'>
              <DropdownMenuItem>Default</DropdownMenuItem>
              <DropdownMenuItem>Price {`{Low to High}`}</DropdownMenuItem>
              <DropdownMenuItem>Price {`{High to Low}`}</DropdownMenuItem>

              <DropdownMenuItem>Rating {`{Low to High}`}</DropdownMenuItem>
              <DropdownMenuItem>Rating {`{High to Low}`}</DropdownMenuItem>
              <DropdownMenuItem>Alphabetical {`{A to Z}`}</DropdownMenuItem>
              <DropdownMenuItem>Alphabetical {`{Z to A}`}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

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
