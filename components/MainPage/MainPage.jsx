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
import Brands from '../Brands/Brands';
import WomenFashion from '../WomanFashion/WomenFashion';
import PhoneAndGadgets from '../PhoneAndGadgets/PhoneAndGadgets';
import HealthAndBeauty from '../HealthAndBeauty/HealthAndBeauty';
import ElectronicsAndGadgets from '../ElectronicsAndGadgets/ElectronicsAndGadgets';
import MensFashion from '../MensFashion/MensFashion';
import KIdsFashion from '../KIdsFashion/KIdsFashion';

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
      <Brands />
      <WomenFashion />
      <PhoneAndGadgets />
      <HealthAndBeauty />
      <ElectronicsAndGadgets />
      <MensFashion />
      <KIdsFashion />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
};

export default MainPage;
