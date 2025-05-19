import { Label } from '../ui/label';
import { Input } from '../ui/input';

const PaymentForm = () => {
  return (
    <form className='w-full justify-center'>
      <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className=' font-thin mb-2'>Name *</Label>
          <Input
            type='text'
            id='name'
            name='name'
            className='border-2 border-gray-100 rounded py-5 mr-4'
          />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className=' font-thin mb-2'>Email *</Label>
          <Input
            type='email'
            id='email'
            name='email'
            className='border-2 border-gray-100 rounded py-5 mr-4'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3 mt-6'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className=' font-thin mb-2'>Card Number *</Label>
          <Input
            type='number'
            id='card'
            name='card'
            className='border-2 border-gray-100 rounded py-5 mr-4'
          />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className=' font-thin mb-2'>Expird Date *</Label>
          <Input
            type='date'
            id='date'
            name='date'
            className='border-2 border-gray-100 rounded py-5 mr-4'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center md:flex-row lg:flex-row gap-3 mt-6'>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className=' font-thin mb-2'>CVC *</Label>
          <Input
            type='text'
            id='cvc'
            name='cvc'
            className='border-2 border-gray-100 rounded py-5 mr-4'
          />
        </div>

        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <button
            type='submit'
            className=' px-8 py-3 font-bold mt-6 bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
