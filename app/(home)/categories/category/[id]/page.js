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

const CategoryBaseProduct = () => {
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

      <div className='my-9'>
        <div className='border cursor-pointer  ml-0 p-0 w-[200px] sm:mx-auto'>
          <CardContent className=''>
            <div>
              <Image
                src={`/airpod.png`}
                alt='categories products image'
                className='w-32 rounded transition duration-500 hover:scale-75'
                height={100}
                width={100}
              />
              <h5 className='text-center text-sm font-semibold hover:text-[#1455ac] transition duration-500'>
                there is a title for category by product
              </h5>
              <p className='text-center'>price: $250</p>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default CategoryBaseProduct;
