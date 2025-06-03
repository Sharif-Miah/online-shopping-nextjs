import FeaturedCardItem from './Featured/FeaturedCardItem/FeaturedCardItem';

const SimilarProduct = () => {
  return (
    <div>
      <h3 className='my-4 text-lg font-semibold text-center'>
        Similar Products
      </h3>
      <FeaturedCardItem
        img='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
        title='New Design Trendy Casual Sneakers for Men Lightwei'
        price={350.0}
        discountPrice={300.0}
      />
    </div>
  );
};

export default SimilarProduct;
