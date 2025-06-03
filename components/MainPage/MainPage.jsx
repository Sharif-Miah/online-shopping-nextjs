import FlashDellCard from '@/components/Flash-Deal/FlashDellCard';
import DeliveryQuestion from '@/components/sheard/DeliveryQuestion';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import Slider from '@/components/slider/Slider';

import FeatureProduct from '../Featured/FeatureProduct';
import { getAllFetureProduct } from '@/app/db/quries';

const MainPage = async () => {
  return (
    <div className='container mx-auto'>
      <Slider />
      <FlashDellCard />
      <FeatureProduct />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
};

export default MainPage;
