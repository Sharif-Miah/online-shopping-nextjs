'use client';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const PaymentForm = ({ loggedInUser, price }) => {
  const [error, setError] = useState('');
  const router = useRouter();
  const succcess = () => toast.success('Successfully Payment !');

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get('name');
      const email = formData.get('email');
      const card = formData.get('card');
      const price = formData.get('price');
      const cvc = formData.get('cvc');
      const date = formData.get('date');

      const res = await fetch('/api/auth/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          card,
          price,
          cvc,
          date,
        }),
      });

      res.status === 201 && router.push('/booking');
      succcess();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className='text-xl text-red-500 text-center'>{error && error}</div>
      <form
        onSubmit={onSubmit}
        className='w-full justify-center'>
        <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>Name *</Label>
            <Input
              type='text'
              id='name'
              name='name'
              value={loggedInUser?.name}
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>Email *</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={loggedInUser?.email}
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3 mt-6'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>Card Number *</Label>
            <Input
              type='number'
              id='card'
              name='card'
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>price *</Label>
            <Input
              type='number'
              id='price'
              name='price'
              value={price}
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3 mt-6'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>CVC *</Label>
            <Input
              type='text'
              id='cvc'
              name='cvc'
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className=' font-thin mb-2'>Order Date *</Label>
            <Input
              type='date'
              id='date'
              name='date'
              className='border-2 border-gray-100 rounded py-5 mr-4'
            />
          </div>
        </div>
        <div className='flex flex-col w-2/3 mx-auto justify-center md:flex-row lg:flex-row gap-3 mt-6'>
          <button
            type='submit'
            className='w-full mx-6 px-8 py-3 font-bold mt-6 bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
            Payment
          </button>
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
