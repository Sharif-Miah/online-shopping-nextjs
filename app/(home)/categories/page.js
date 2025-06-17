import { getAllCategories } from '@/app/db/quries';
import CategoryCart from '@/components/categories/categoryCart';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';

const CategoriesPage = async () => {
  const categories = await getAllCategories();

  return (
    <section className='container  bg-white pt-4 pb-32 mx-auto'>
      <div className='py-6'>
        <div className='bg-[#eef6ff] py-8 px-4 rounded-xl sm:my-4 lg:my-0 flex flex-col lg:flex-row justify-between '>
          <div>
            <h2 className='text-[#1455ac] ml-5 font-bold text-2xl uppercase'>
              Category
            </h2>
            <p className='text-[#1455ac] ml-5 font-semibold'>
              Find your favorite categories and products
            </p>
          </div>
          <div className='flex mt-4 lg:mt-0'>
            <Input
              type='search'
              className='w-full rounded border-blue-600'
              placeholder='Search for items...'
            />
            <span className='bg-blue-600 mb-12 pb-3  rounded cursor-pointer -ml-2'>
              <IoIosSearch className='text-xl text-white  mt-1' />
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-2 justify-center  lg:grid-cols-8 mt-4'>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`categories/category/${category.id}`}>
              <CategoryCart category={category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPage;
