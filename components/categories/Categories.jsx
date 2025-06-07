import { getAllCategories } from '@/app/db/quries';
import ViewButton from '../sheard/ViewButton';
import CategoriesItem from './CategoriesItem';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <section className='my-6 bg-white pt-4 pb-32 '>
      <div className='py-6'>
        <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>Category</h2>

        <div className='mb-5'>
          <div className='gap-1 mr-4'>
            <Link
              href={'/categories'}
              className='text-[#1455ac] flex justify-end gap-2'>
              View All
              <IoIosArrowForward className='text-[#1455ac] mt-1' />
            </Link>
          </div>
        </div>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-8 lg:grid-cols-8 ml-0 justify-items-center'>
          {categories.slice(0, 8).map((category) => (
            <CategoriesItem
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
