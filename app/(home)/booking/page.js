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
import { getAllBooking } from '@/app/db/quries';
import BookingCard from '@/components/Booking/BookingCard';

const BookingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const bookings = await getAllBooking();

  return (
    <section className='max-w-7xl mx-auto my-10'>
      <h2 className='text-xl font-bold my-10'>🕛️ My Bookings</h2>

      <div className='space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
