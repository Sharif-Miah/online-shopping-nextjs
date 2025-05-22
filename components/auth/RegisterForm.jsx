'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      const phone = formData.get('phone');
      const bio = formData.get('bio');

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          bio,
        }),
      });
      res.status === 201 && router.push('/login');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className='text-xl text-red-500 text-center'>{error && error}</div>
      <form
        className='login-form'
        onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            name='name'
            id='name'
          />
        </div>

        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            id='email'
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
          />
        </div>

        <div>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            id='phone'
          />
        </div>

        <div>
          <label htmlFor='bio'>Bio</label>
          <input
            className='min-h-16'
            type='text'
            name='bio'
            id='bio'
          />
        </div>

        <button
          type='submit'
          className='btn-primary font-bold rounded py-2 text-white w-full mt-4 bg-[#1455ac] hover:bg-[#1b529a]'>
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
