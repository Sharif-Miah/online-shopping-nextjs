import Image from 'next/image';
import Link from 'next/link';
import google from '@/public/google_app.png';
import apple from '@/public/apple_app.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MdOutlineMail } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import { IoLogoTiktok } from 'react-icons/io5';

const Footer = () => {
  const speacialMenu = [
    { id: 1, name: 'Flash Deal' },
    { id: 2, name: 'Featured Products' },
    { id: 3, name: 'Latest Productsl' },
    { id: 4, name: 'Best Selling Products' },
    { id: 5, name: 'Top Rated Products' },
  ];

  const accountShipings = [
    { id: 1, name: 'Profile Info' },
    { id: 2, name: 'Wish List' },
    { id: 3, name: 'Track Order' },
    { id: 4, name: 'Refund policy' },
    { id: 5, name: 'Return policy' },
    { id: 6, name: 'Cancellation policy' },
  ];

  return (
    <footer>
      <div className='bg-[#184261] py-9 '>
        <div className='max-w-7xl mx-auto'>
          <div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {/* Column 1  */}
              <div>
                <div className='text-center md:text-left'>
                  <h3 className='text-2xl font-bold text-white mb-9'>
                    <Link href='/'>Online Shopping</Link>
                  </h3>
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-white font-normal text-xl mb-3'>
                    Download our app
                  </h3>
                  <div className='flex gap-3 justify-center md:justify-start'>
                    <Image
                      src={google}
                      alt='google app'
                      width={130}
                      className='cursor-pointer'
                    />
                    <Image
                      src={apple}
                      alt='apple app'
                      width={130}
                      className='cursor-pointer'
                    />
                  </div>
                </div>
              </div>
              {/* Column 2  */}
              <div className='flex justify-center gap-6 md:justify-between'>
                <div>
                  <h4 className='text-white font-semibold text-xl mb-3'>
                    Special
                  </h4>
                  <ul>
                    {speacialMenu.map((speacial) => (
                      <li
                        key={speacial.id}
                        className='list-none text-white mt-1 font-normal hover:text-gray-500'>
                        <Link href='/'>{speacial.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='text-white font-semibold text-xl mb-3'>
                    Account & shipping info
                  </h4>
                  <ul>
                    {accountShipings.map((accountShiping) => (
                      <li
                        key={accountShiping.id}
                        className='list-none text-white mt-1 font-normal hover:text-gray-500'>
                        <Link href='/'>{accountShiping.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Column 3  */}
              <div className=''>
                <h3 className='text-white font-normal text-center md:text-start text-xl mb-3'>
                  Newsletter
                </h3>
                <h4 className='text-white font-normal text-center md:text-start text-md mb-3'>
                  Subscribe to our new channel to get latest updates
                </h4>
                <div className=''>
                  <div className='flex w-full max-w-sm mx-auto md:max-w-md  items-center space-x-2'>
                    <Input
                      type='email'
                      placeholder='Email'
                      className='border-gray-400 border-2  rounded text-white'
                    />
                    <Button
                      type='submit'
                      className='bg-red-700 text-white hover:bg-red-500 rounded'>
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-[1fr,2fr] lg:grid-cols-[1fr, 2fr] gap-4 mt-16'>
            <div className='hidden sm: mx-auto md:block lg:block'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
              <div className='text-center md:text-start lg:text-start'>
                <h5 className='text-white font-semibold'>
                  Start a conversation
                </h5>
                <p className='text-white'>+8801906562866</p>
              </div>

              <div>
                <div class='flex items-center w-full'>
                  <hr class='flex-grow border-gray-300' />
                  <span class='px-4 text-white font-semibold'>
                    Email & Support
                  </span>
                  <hr class='flex-grow border-gray-300' />
                </div>

                <div className='flex mx-auto flex-col'>
                  <div className='flex gap-2 mx-auto md:mx-0 lg:mx-0'>
                    <MdOutlineMail className='text-white text-lg mt-1 ' />
                    <span className='text-white'>sharif.miah982@gmail.com</span>
                  </div>
                  <div className='flex gap-2 mx-auto md:mx-0 lg:mx-0'>
                    <BiSupport className='text-white text-lg mt-1' />

                    <Link href='/'>
                      <span className='text-white'>Souport Ticket</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className=''>
                  <div class='flex items-center w-full'>
                    <hr class='flex-grow border-gray-300' />
                    <span class='px-4 text-white font-semibold'>Address</span>
                    <hr class='flex-grow border-gray-300' />
                  </div>
                </div>
                <div className='flex gap-3'>
                  <div className='flex gap-2 mx-auto'>
                    <FiMapPin className='text-white text-sm mt-1' />

                    <span className='text-white'>
                      Bonaid, Narsingdi, Dhaka.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#24495f] py-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div>
              <p className='text-md text-white text-center mb-3'>
                Copyright onlineStore@2025
              </p>
            </div>
            <div className='flex gap-2 mx-auto'>
              <div className='p-3 bg-gray-500 text-white rounded-full hover:bg-white hover:text-blue-600 cursor-pointer'>
                <Link href='/facebook'>
                  <FaFacebookF />
                </Link>
              </div>

              <div className='p-3 bg-gray-500 text-white rounded-full hover:bg-white hover:text-red-600 cursor-pointer'>
                <Link href='/youtube'>
                  <FaYoutube />
                </Link>
              </div>

              <div className='p-3 bg-gray-500 text-white rounded-full hover:bg-white hover:text-green-600 cursor-pointer'>
                <Link href='/whatsapp'>
                  <FaWhatsapp />
                </Link>
              </div>

              <div className='p-3 bg-gray-500 text-white rounded-full hover:bg-white hover:text-black cursor-pointer'>
                <Link href='/tiktok'>
                  <IoLogoTiktok />
                </Link>
              </div>
            </div>
            <div>
              <ul className='text-white flex flex-col md:flex-row mt-1 gap-3 '>
                <li className='list-none text-lg hover:text-gray-300 text-center font-normal'>
                  <Link href='/'>Term and condition</Link>
                </li>
                <li className='list-none text-lg hover:text-gray-300 text-center font-normal'>
                  <Link href='/'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
