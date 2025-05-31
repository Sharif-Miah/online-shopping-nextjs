'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/actions/userAction';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const succcess = () => toast.success('Successfully Login !');

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);
      console.log(response);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push('/');
        succcess();
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
