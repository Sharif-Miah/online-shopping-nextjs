import FlashDellCard from '@/components/Flash-Deal/FlashDellCard';
import DeliveryQuestion from '@/components/sheard/DeliveryQuestion';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import Slider from '@/components/slider/Slider';
import FeatureProduct from '../Featured/FeatureProduct';
import Categories from '../categories/Categories';
import FeaturedDeal from '../FeaturedDeal/FeaturedDeal';
import SpecialPromoImg from '../SpecialPromoImg/SpecialPromoImg';
import LatestProduct from '../LetestProduct/LatestProduct';
import NewArrivals from '../NewArrivals/NewArrivals';

const MainPage = async () => {
  return (
    <div className='container mx-auto'>
      <Slider />
      <FlashDellCard />
      <FeatureProduct />
      <Categories />
      <FeaturedDeal />
      <SpecialPromoImg />
      <LatestProduct />
      <NewArrivals />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
};

export default MainPage;
