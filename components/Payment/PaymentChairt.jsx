import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GoPackage } from 'react-icons/go';
import { HiOutlineCreditCard } from 'react-icons/hi';

const PaymentChairt = () => {
  return (
    <div className='my-5'>
      <div className='flex justify-center mx-auto'>
        <FaShoppingCart className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
        <div className='border-t-4 border-[#1455ac] w-52 mt-[12px]'></div>
        <GoPackage className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
        <div className='border-t-4 border-[#1455ac] w-52 mt-[12px]'></div>
        <HiOutlineCreditCard className='bg-[#1455ac] text-white p-2 rounded-full text-3xl' />
      </div>
      <ul className='flex mx-auto justify-center gap-36 mt-'>
        <li className='list-none cursor-pointer'>Cart</li>
        <li className='list-none text-black'>Shipping and Billing</li>
        <li className='list-none cursor-pointer'>Payment</li>
      </ul>
    </div>
  );
};

export default PaymentChairt;
