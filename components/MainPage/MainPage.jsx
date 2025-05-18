import FlashDellCard from '@/components/Flash-Deal/FlashDellCard';
import DeliveryQuestion from '@/components/sheard/DeliveryQuestion';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import Slider from '@/components/slider/Slider';
import { flashModel } from '@/models/flash-image-model';

const MainPage = async () => {
  return (
    <div className='container mx-auto'>
      <Slider />
      <FlashDellCard />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
};

export default MainPage;
