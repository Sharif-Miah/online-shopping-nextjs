import Link from 'next/link';
import SignInOut from '../auth/SignInOut';

const Navbar = () => {
  return (
    <navbar>
      <section className=' bg-[#1455ac] py-2'>
        <div className='flex justify-between gap-4 max-w-7xl mx-auto'>
          <Link
            href='/'
            className='flex justify-between mt-1 text-xl mx-auto font-normal text-white ml-4 px-3  rounded cursor-pointer'>
            Online Shopping
            <div className=' text-[#1455ac]'></div>
          </Link>
          <div className='mr-3'>
            <ul className=' mx-auto flex gap-6 items-center text-white font-normal '>
              <li className='text-white  text-lg'>
                <SignInOut />
              </li>

              <li className='text-lg text-white '>
                <div className='flex'>
                  <Link
                    href='/'
                    className=' text-white  py-2 px-4 rounded inline-flex items-center'>
                    Order
                  </Link>
                </div>
              </li>

              <li className='text-white text-lg hover:text-gray-400 duration-500'>
                <Link href='/'>orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </navbar>
  );
};

export default Navbar;
