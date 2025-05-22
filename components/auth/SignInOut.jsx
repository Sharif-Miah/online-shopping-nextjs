'use client';

import { signOut } from 'next-auth/react';
import { MdOutlineLogout } from 'react-icons/md';

const SignInOut = () => {
  return (
    <button
      title='Logout'
      onClick={() =>
        signOut({
          callbackUrl: 'http://localhost:3000/login',
        })
      }>
      <div className=''>
        <MdOutlineLogout className=' flex items-center' />
      </div>
    </button>
  );
};

export default SignInOut;
