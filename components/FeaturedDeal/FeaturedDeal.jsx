import ViewButton from '../sheard/ViewButton';
import FeaturedCardItem from './FeaturedCardItem';

const FeaturedDeal = () => {
  return (
    <section className='my-6 bg-[#e5f1ff] py-6 rounded'>
      <h2 className='text-[#1455ac] ml-5 font-bold text-2xl'>Featured Deal</h2>
      <ViewButton />
      <p className='my-2 ml-5 text-lg font-medium'>
        See the latest deals and exciting new offers!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mx-auto mt-6 cursor-pointer '>
        <FeaturedCardItem />
      </div>
    </section>
  );
};

export default FeaturedDeal;
