import ViewButton from '../sheard/ViewButton';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  return (
    <section className='my-6 bg-white pt-4 pb-32 mx-auto'>
      <div className='py-6'>
        <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>
          Categories Product
        </h2>

        <div className='mb-5'>
          <ViewButton />
        </div>
        <div className='grid gap-2 grid-cols-1 md:grid-cols-10 lg:grid-cols-10 justify-items-center'>
          <CategoriesItem />
        </div>
      </div>
    </section>
  );
};

export default Categories;
