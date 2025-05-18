import { FaHeart, FaStar } from 'react-icons/fa';

const ProductCalculate = () => {
  return (
    <div className='flex-grow w-full md:w-2/3 '>
      <div>
        <h2 className='text-xl font-bold mt-6'>
          Exclusive & Fashionable Suit For Men
        </h2>
        <div className='flex'>
          <div className='flex gap-[6px]  text-[#ff7d1e] my-2 text-md '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className='mt-1 ml-2 font-semibold text-gray-600'>(5.00)</span>
          <div className='flex mt-1 border-r-2'>
            <span className='ml-3 font-semibold text-gray-600 '>1</span>
            <span className='ml-2  font-semibold text-gray-600 mr-3'>
              reviews
            </span>
          </div>
          <div className='flex mt-1 border-r-2'>
            <span className='ml-3  font-semibold text-gray-600 '>30</span>
            <span className='ml-2  font-semibold text-gray-600 mr-3'>
              orders
            </span>
          </div>
          <div className='flex mt-1  border-r-2'>
            <span className='ml-3  font-semibold text-gray-600 '>0</span>
            <span className='ml-2  font-semibold text-gray-600 mr-3'>
              wished
            </span>
          </div>
        </div>
        <div className='flex gap-1'>
          <p className='text-xl text-[#1455ac] mt-1 font-bold'>$450.00</p>
          <p className='text-[16px] mt-3 font-bold line-through text-gray-400'>
            $500.00
          </p>
        </div>
        <div className='flex mt-3'>
          <h4 className='text-md font-semibold mt-1'>Color:</h4>
          <div className='ml-4'>
            <button className='bg-[#9966CC] text-[#9966CC] py-1 mt-0  border-white px-[10px] rounded-3xl'>
              0
            </button>
            <button className='bg-[#FAEBD7] text-[#FAEBD7]  py-1 mt-0  ml-2 border-white px-[10px] rounded-3xl'>
              0
            </button>
          </div>
        </div>
        <div className='flex mt-3'>
          <h4 className='text-md font-semibold mt-1'>Size:</h4>
          <div className='ml-4'>
            <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  border-black px-[10px] rounded'>
              s
            </button>
            <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  ml-2 border-black px-[10px] rounded'>
              L
            </button>
          </div>
        </div>
        <div className='flex mt-2'>
          <h4 className='text-md font-semibold mt-2'>Quentity:</h4>
          <div className='ml-4 border py-0 px-3 bg-[#FAEBD7] border-black'>
            <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  border-black px-2 rounded'>
              -
            </button>
            <span className='ml-2 bg-white px-4 py-1 rounded-lg'>0</span>
            <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  ml-2 border-black px-2  rounded'>
              +
            </button>
          </div>
        </div>
        <div className='flex mt-2'>
          <h4 className='text-md font-semibold mt-2'>Total Price:</h4>
          <div className='ml-4 mt-2 py-0 '>
            <span className=' text-lg font-bold text-[#1455ac]'>$475.00</span>
          </div>
        </div>

        <div className='mt-5 flex'>
          <button className='bg-[#dd7f13] hover:bg-[#c47112] text-white font-normal text-md  py-2 mt-0  ml-2 border-black px-5  rounded'>
            Buy Now
          </button>

          <button className='bg-[#1455ac] hover:bg-[#0f468f] text-white font-normal text-md  py-2 mt-0  ml-2 border-black px-3  rounded'>
            Add to Card
          </button>

          {/* wish list design  */}

          <button className='flex cursor-pointer ml-6'>
            <div className='flex gap-1 py-1  rounded border border-gray-300 px-3 '>
              <FaHeart className='text-xl mt-1 text-[#1455ac]' />
              <p className='  text-md'>0</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCalculate;
