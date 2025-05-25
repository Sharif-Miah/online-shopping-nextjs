import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const ProfileForm = () => {
  return (
    <div className='container mt-5 border-2 p-10 mx-auto'>
      <form>
        <div className='flex flex-col md:flex-row lg:flex-row gap-3'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'>First Name</Label>
            <Input
              type='text'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'>Last Name</Label>
            <Input
              type='text'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-3 mt-7'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'>Phone Number</Label>
            <Input
              type='number'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'>Email</Label>
            <Input
              type='email'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row gap-3 mt-7'>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'> New Password</Label>
            <Input
              type='password'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-[#1455ac]'>Confirm Password</Label>
            <Input
              type='password'
              className='border-2 border-gray-100 text-black rounded py-5 mr-4'
            />
          </div>
        </div>

        <div className='text-end'>
          <Button className=' px-8 mt-6 bg-[#1455ac] text-white rounded hover:bg-[#1455ac]'>
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
