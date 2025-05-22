'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const SocialLogins = () => {
  const handleAuth = (event) => {
    signIn('google', { callbackUrl: 'http://localhost:3000/' });
  };

  return (
    <div>
      <div className='flex gap-4'>
        <button className=' w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center'>
          <Image
            src='/fb.png'
            alt='facebook'
            width={30}
            height={30}
          />
          <span>Facebook</span>
        </button>
        <button
          onClick={handleAuth}
          className=' w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center'>
          <Image
            src='/google.png'
            alt='google'
            width={30}
            height={30}
          />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogins;
