import Link from 'next/link';

const Navbar = () => {
  return (
    <navbar>
      <section className=' bg-[#1455ac] py-2'>
        <div className='grid grid-cols-[1fr,3fr] gap-4 max-w-7xl mx-auto'>
          <Link
            href='/'
            className='flex justify-between bg-white ml-4  rounded cursor-pointer'>
            <div className='mt-1 text-xl mx-auto font-normal text-[#1455ac]'>
              Online Shopping
            </div>
          </Link>
          <div>
            <ul className=' mx-auto flex gap-6 items-center text-white font-normal '>
              <li className='text-white text-lg hover:text-gray-400 duration-500'>
                <Link href='/'>Home</Link>
              </li>

              <li className='dropdown inline-block relative  text-whitte text-lg hover:text-gray-400 duration-500 '>
                <div className='flex'>
                  <Link
                    href='/'
                    className=' text-white  py-2 px-4 rounded inline-flex items-center'>
                    Brand
                  </Link>
                </div>
              </li>
              <li className='dropdown inline-block relative  text-whitte text-lg hover:text-gray-400 duration-500 '>
                <div className='flex'>
                  <Link
                    href='/'
                    className=' text-white  py-2 px-4 rounded inline-flex items-center'>
                    Order
                  </Link>
                </div>
              </li>
              <li className='dropdown inline-block relative  text-whitte text-lg hover:text-gray-400 duration-500 '>
                <div className='flex'>
                  <Link
                    href='/'
                    className=' text-white  py-2 px-4 rounded inline-flex items-center'>
                    User Account
                  </Link>
                </div>
              </li>

              <li className='text-white text-lg hover:text-gray-400 duration-500'>
                <Link href='/'>All vantor</Link>
              </li>
              <li className='text-white text-lg hover:text-gray-400 duration-500'>
                <Link href='/'>Others</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </navbar>
  );
};

export default Navbar;
