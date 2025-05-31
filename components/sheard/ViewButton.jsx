import { IoIosArrowForward } from 'react-icons/io';

const ViewButton = () => {
  return (
    <div className='gap-1 mr-4'>
      <p className='text-[#1455ac] flex justify-end gap-2'>
        View All
        <IoIosArrowForward className='text-[#1455ac] mt-1' />
      </p>
    </div>
  );
};

export default ViewButton;
