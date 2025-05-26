import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import man from '@/public/man.png';
import offer from '@/public/offer.svg';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';

const BookingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='mt-4 mb-9'>
        <h3 className='my-3 text-xl font-bold'>Shopping Cart</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 my-3 gap-6'>
          <div className='col-span-2'>
            <div className='flex bg-[#f3f5f9] px-4 py-4 mb-3 rounded'>
              <div className=' flex-grow text-md font-semibold'>
                <li className='list-none'>Product</li>
              </div>
              <div className='w-2/4'>
                <div className='flex justify-around gap-8 text-md font-semibold'>
                  <li className='list-none'>Unit Price</li>
                  <li className='list-none'>Qty</li>
                  <li className='list-none'>Total</li>
                </div>
              </div>
            </div>
            <div className='bg-white rounded py-8 px-6 mt-3'>
              <div className='flex flex-col  lg:flex-row  justify-between'>
                <div className='flex gap-3'>
                  <div className='mt-[2px]'>
                    <Checkbox id='terms' />
                  </div>
                  <h6 className='text-md font-medium text-[#1455ac]'>
                    Deluxe Online
                  </h6>
                </div>
                <div>
                  <div className='flex gap-1 mt-3 lg:mt-0'>
                    <p className='text-md font-semibold'>
                      Total shipping cost:
                    </p>
                    <span>$30.00</span>
                  </div>
                </div>
              </div>
              <hr className='my-3' />

              <div className='flex flex-col lg:flex-row'>
                <div className='flex-grow'>
                  <div className='flex flex-col lg:flex-row gap-3'>
                    <span className='mt-9'>
                      <Checkbox />
                    </span>
                    <div className='mt-4'>
                      <Image
                        src={man}
                        className='w-14'
                        width={100}
                        height={100}
                        alt=''
                      />
                    </div>
                    <div>
                      <h4 className='text-thin font-normal hover:text-[#f58300] cursor-pointer'>
                        Exclusive & Fashionable suite for men
                      </h4>
                      <p className='text-sm'>Variant : Amethyst-s</p>
                      <div className='flex gap-3'>
                        <span className=''>color : Amethyst</span>
                        <span className=''>size : s</span>
                      </div>
                      <div className='flex gap-1'>
                        <p className='font-semibold'>shopping cost:</p>
                        <span className='ml-2'>$30.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-2/4'>
                  <div className='flex flex-col lg:flex-row justify-around lg:gap-8 text-md font-semibold'>
                    <div className='my-8'>
                      <p className='ml-5'>$450.00</p>
                      <p className='text-sm'>{`{condition: $25.00}`}</p>
                    </div>
                    <div className='mt-10 '>
                      <span className='mt-1'>
                        <button className='text-xl mr-2'>-</button>
                      </span>
                      <span className='border-[#d5e8fc] bg-[#f4f9fe] py-1 px-3'>
                        0
                      </span>
                      <button className='text-xl ml-2'>+</button>
                    </div>
                    <p className='mt-10'>$450.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1 bg-white px-10 py-6'>
            <div className='flex justify-center items-center'>
              <span className='mt-1'>
                <Image
                  src={offer}
                  alt=''
                  width={25}
                  height={25}
                  className='mr-2'
                />
              </span>
              <h3 className='text-center text-blue-600 text-lg font-medium'>
                You have Saved $100.00!
              </h3>
            </div>
            <div className='mt-5'>
              <div className='flex justify-between'>
                <h2 className='text-md font-normal'>Sub total</h2>
                <span className='text-lg font-medium'>$1000.00</span>
              </div>
              <div className='flex justify-between mt-2'>
                <h2 className='text-md font-normal'>Tax</h2>
                <span className='text-lg font-medium'>$10.00</span>
              </div>
              <div className='flex justify-between mt-2'>
                <h2 className='text-md font-normal'>Shipping</h2>
                <span className='text-lg font-medium'>$30.00</span>
              </div>
              <div className='flex justify-between mt-2'>
                <h2 className='text-lmd font-normal'>Discount on product</h2>
                <span className='text-lg font-medium'>-$100.00</span>
              </div>
              <hr className='mt-3' />
              <div className='flex justify-between mt-2'>
                <h2 className='text-lmd font-normal'>Total Price</h2>
                <span className='text-lg font-medium'>$980.00</span>
              </div>
              <Link href={'/checkout'}>
                <Button className='w-full mt-12 bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
                  Proceed To Checkout
                </Button>
              </Link>
              <Link href='/'>
                <div className='flex justify-center'>
                  <p className='mt-7'>
                    <IoIosArrowBack className='mr-1 text-[#1455ac]' />
                  </p>
                  <p className='text-[#1455ac] text-lg text-center mt-5'>
                    Continue Shopping
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <QuestionAnswer />
      </div>
    </section>
  );
};

export default BookingPage;
