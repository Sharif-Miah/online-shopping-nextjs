'use client';

import { signOut } from 'next-auth/react';
import { MdOutlineLogout } from 'react-icons/md';

const SignInOut = () => {
  return (
    <button
      className=' justify-center items-center'
      title='Logout'
      onClick={() =>
        signOut({
          callbackUrl: 'http://localhost:3000/login',
        })
      }>
      <MdOutlineLogout className=' text-xl ' />
    </button>
  );
};

export default SignInOut;
