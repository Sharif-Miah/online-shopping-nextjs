import Image from 'next/image';

const BookingCard = ({ booking }) => {
  return (
    <div className='bg-[#ebf6e9] p-4 rounded-md'>
      <div className='flex justify-between items-center '>
        <div className='flex flex-col'>
          <h3 className='text-xl font-semibold'>{booking.name}</h3>
          <p className='text-sm text-gray-600 my-1'>{booking.email}</p>
        </div>
        <div>
          <div className='text-sm text-gray-600 my-4'>
            <p>Booking Date: {booking.date}</p>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold text-right'>${booking.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
