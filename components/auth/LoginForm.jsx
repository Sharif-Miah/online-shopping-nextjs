'use client';

import { performLogin } from '@/app/actions/userAction';
import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const [error, setError] = useState('');
  const { setAuth } = useAuth();
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push('/');
      } else {
        setError('Please Provide a valid login credential');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <form
        className='login-form'
        onSubmit={onSubmit}>
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

        <button
          type='submit'
          className='btn-primary font-bold rounded py-2 text-white w-full mt-4 bg-[#1455ac] hover:bg-[#1b529a]'>
          Login
        </button>
      </form>

      <div className='my-2 text-red-500'>{error}</div>
    </>
  );
};

export default LoginForm;
