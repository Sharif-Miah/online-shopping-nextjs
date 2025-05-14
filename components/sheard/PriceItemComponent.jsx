import React from 'react';

const PriceItemComponent = ({ price, discountPrice }) => {
  return (
    <div className='flex gap-1'>
      <p className='text-sm mt-1 line-through text-gray-400'>${price}</p>
      <span> | </span>
      <p className='text-md text-black font-semibold'>${discountPrice}</p>
    </div>
  );
};

export default PriceItemComponent;
