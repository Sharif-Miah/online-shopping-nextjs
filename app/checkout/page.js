import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';

import money from '@/public/money.png';
import offer from '@/public/offer.svg';
import paypal from '@/public/payment/paypal.png';
import razor from '@/public/payment/rezor.png';
import ssl from '@/public/payment/ssl.png';
import stripe from '@/public/payment/stripe.png';

const CheckoutPage = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='my-8'>
        <h3 className='my-3 text-3xl font-semibold text-black uppercase'>
          Payment method
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 my-3 gap-6'>
          <div className='col-span-2'>
            <div className='my-5'>
              <div className='flex'>
                <FaShoppingCart className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
                <div className='border-t-4 border-[#1455ac] w-52 mt-[12px]'></div>
                <GoPackage className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
                <div className='border-t-4 border-[#1455ac] w-52 mt-[12px]'></div>
                <HiOutlineCreditCard className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
              </div>
              <ul className='flex gap-36 mt-'>
                <li className='list-none cursor-pointer'>Cart</li>
                <li className='list-none text-black'>Shipping and Billing</li>
                <li className='list-none cursor-pointer'>Payment</li>
              </ul>
            </div>
            <div className='bg-white rounded border-2 border-gray-200 py-4 px-6 mt-3'>
              <div className='gap-1 mr-4'>
                <Link href='/'>
                  <p className='text-[#1455ac] flex justify-end gap-1'>
                    <MdOutlineKeyboardArrowLeft className='text-[#1455ac] mt-[6px]' />
                    Go back
                  </p>
                </Link>
              </div>
              <h3 className='my-2 text-2xl font-normal text-black'>
                Payment method
              </h3>
              <h3 className='my-4 text-lg font-normal text-black'>
                Select a payment method to proceed
              </h3>
              <div>
                <RadioGroup>
                  <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                    <RadioGroupItem
                      value='default'
                      id='r1'
                    />
                    <Image
                      src={money}
                      width={100}
                      height={100}
                      alt='money'
                      className='w-5'
                    />
                    <Label htmlFor='r1'>Cash on Delivery</Label>
                  </div>
                </RadioGroup>
                <h3 className='my-8 text-xl font-normal text-black'>
                  Pay via online
                </h3>

                <div>
                  <div className='flex justify-evenly gap-3'>
                    <RadioGroup className=''>
                      <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                        <RadioGroupItem
                          value='default'
                          id='r1'
                        />
                        <Image
                          src={paypal}
                          width={100}
                          height={100}
                          alt='money'
                          className='w-5'
                        />
                        <Label htmlFor='r1'>Paypal</Label>
                      </div>
                    </RadioGroup>
                    <RadioGroup className=''>
                      <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                        <RadioGroupItem
                          value='default'
                          id='r1'
                        />
                        <Image
                          src={stripe}
                          width={100}
                          height={100}
                          alt='money'
                          className='w-5'
                        />
                        <Label htmlFor='r1'>Stripe</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className='flex justify-evenly gap-3 mt-4 mb-10'>
                    <RadioGroup className=''>
                      <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                        <RadioGroupItem
                          value='default'
                          id='r1'
                        />
                        <Image
                          src={razor}
                          width={100}
                          height={100}
                          alt='money'
                          className='w-5'
                        />
                        <Label htmlFor='r1'>Razor pay</Label>
                      </div>
                    </RadioGroup>
                    <RadioGroup className=''>
                      <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                        <RadioGroupItem
                          value='default'
                          id='r1'
                        />
                        <Image
                          src={ssl}
                          alt=''
                          width={100}
                          height={100}
                          className='w-5'
                        />
                        <Label htmlFor='r1'>Ssl commerz</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className='flex bg-[#f3f5f9] px-4 py-4 mb-3 rounded'>
                    <RadioGroup className=''>
                      <div className='flex items-center rounded w-[230px] px-5 py-3 space-x-2'>
                        <RadioGroupItem
                          value='default'
                          id='r1'
                        />

                        <Label htmlFor='r1'>Pay offline</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Site form  */}
          <div className='col-span-1 bg-white px-10 py-6'>
            <div className='flex justify-center'>
              <span className='mt-1'>
                <Image
                  src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747533703/beauty_y95omv.webp'
                  width={100}
                  height={100}
                  alt=''
                  className='mr-2'
                />
              </span>
              <h3 className='text-center text-blue-600 text-lg font-medium'>
                You have Saved $100.00!
              </h3>
            </div>

            <div className='mt-5'>
              <div className='flex justify-between'>
                <h2 className='text-md font-normal'>Sub total:</h2>
                <span className='text-lg font-medium'>$1000.00</span>
              </div>
              <div className='flex justify-between mt-2'>
                <h2 className='text-md font-normal'>Condition</h2>
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
              <Button className='w-full mt-12 bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
                Proceed To Checkout
              </Button>
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

export default CheckoutPage;
