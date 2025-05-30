import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import man from '@/public/man.png';
import offer from '@/public/offer.svg';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';

const BookingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='space-y-4'>
          <h2 className='text-xl font-bold'>🕛️ Bookings</h2>

          <div className='bg-[#ebf6e9] p-4 rounded-md'>
            <div className='flex justify-between items-center '>
              <div>
                <h3 className='text-xl font-semibold'>shahet</h3>
                <div className='text-sm text-gray-600 my-4'>
                  <p>Check In: 12/12/2021</p>
                  <p>Check Out: 14/12/2021</p>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-right'>$124</h3>
                <p className='text-sm text-gray-600'>$62 per night x 2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
