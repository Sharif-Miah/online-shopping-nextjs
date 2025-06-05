'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaSignInAlt, FaUserCircle } from 'react-icons/fa';

const LoginRegisterPopUP = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModal(!modal)}
        className='bg-[#eeeeef] p-3 rounded-full cursor-pointer relative'>
        <FaUser className='text-sm  text-blue-600 ' />
      </button>

      <div className='bg-white text-black absolute top-12 right-12 z-10'>
        {modal && (
          <div className='py-2 px-4'>
            <Link
              href='/login'
              className='text-sm '>
              <div className='flex gap-2 justify-center items-center hover:text-[#1455ac]  '>
                <FaSignInAlt />
                Sign In
              </div>
            </Link>
            <div className='border-b-2 border-[#1455ac] my-2'></div>
            <Link
              href='/register'
              className='text-sm'>
              <div className='flex gap-2 justify-center items-center hover:text-[#1455ac]'>
                <FaUserCircle />
                Sign Up
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPopUP;
