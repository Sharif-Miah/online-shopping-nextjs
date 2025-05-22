import Link from 'next/link';
import { auth } from '@/auth';
import SignInOut from '../auth/SignInOut';

const Navbar = async ({ sidemenu }) => {
  const session = await auth();
  return (
    <navbar>
      <section className=' bg-[#1455ac] py-2'>
        <div className='flex justify-between gap-4 max-w-7xl mx-auto'>
          <Link
            href='/'
            className='flex justify-between mt-1 text-xl mx-auto font-normal text-white ml-4 px-3  rounded cursor-pointer'>
            <div className=' text-[#fff]'>𝓢𝓸𝓬𝓲𝓪𝓵 𝓒𝓲𝓻𝓬𝓵𝓮</div>
          </Link>
          {sidemenu && (
            <div className='mr-3'>
              <ul className=' mx-auto flex gap-6 items-center text-white font-normal '>
                <li className='text-lg text-white '>
                  <div className='flex'>
                    <Link
                      href='/'
                      className=' text-white  py-2 px-4 rounded inline-flex items-center'>
                      Order
                    </Link>
                  </div>
                </li>

                <li className='text-white  text-lg'>
                  {session?.user ? (
                    <>
                      <span className='mx-2'>Hello, {session?.user?.name}</span>
                      <span className='mx-1'>|</span>
                      <SignInOut />
                    </>
                  ) : (
                    <>
                      <Link href='/login'>Login</Link>
                    </>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </navbar>
  );
};

export default Navbar;
