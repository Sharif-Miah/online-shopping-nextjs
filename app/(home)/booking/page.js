import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getAllBooking } from '@/app/db/quries';
import BookingCard from '@/components/Booking/BookingCard';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const BookingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const bookings = await getAllBooking();

  return (
    <section className='max-w-7xl mx-auto my-10'>
      <h2 className='text-xl font-bold my-10'>🕛️ My Bookings</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className='text-right pr-10'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking, index) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              index={index}
            />
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default BookingPage;
