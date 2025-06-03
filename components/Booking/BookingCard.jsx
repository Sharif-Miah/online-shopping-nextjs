import { TableCell, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { FaRegEye } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const BookingCard = ({ booking, index }) => {
  return (
    <TableRow>
      <TableCell className='font-medium'>{index + 1}</TableCell>
      <TableCell>{booking.name}</TableCell>
      <TableCell>{booking.email}</TableCell>
      <TableCell className='text-green-600 flex gap-1  items-center'>
        <GoDotFill />
        Paid
      </TableCell>
      <TableCell className=''>{booking.price}</TableCell>
      <TableCell className='text-right'>
        <div className='flex gap-3 justify-end'>
          <FaRegEye className='mt-1 cursor-pointer hover:text-[#184261] text-md' />
          <Link href='#'>Download</Link>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookingCard;
