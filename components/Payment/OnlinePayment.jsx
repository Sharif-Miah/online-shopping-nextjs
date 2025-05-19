import React from 'react';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import Image from 'next/image';

import offer from '@/public/offer.svg';
import paypal from '@/public/payment/paypal.png';
import razor from '@/public/payment/rezor.png';
import ssl from '@/public/payment/ssl.png';
import stripe from '@/public/payment/stripe.png';

const OnlinePayment = () => {
  return (
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
            <Label htmlFor='r1'>SSL commerce</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default OnlinePayment;
