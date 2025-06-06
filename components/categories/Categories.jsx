import { getAllCategories } from '@/app/db/quries';
import ViewButton from '../sheard/ViewButton';
import CategoriesItem from './CategoriesItem';

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <section className='my-6 bg-white pt-4 pb-32 mx-auto'>
      <div className='py-6'>
        <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>
          Categories Product
        </h2>

        <div className='mb-5'>
          <ViewButton />
        </div>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-8 lg:grid-cols-8  justify-items-center'>
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
