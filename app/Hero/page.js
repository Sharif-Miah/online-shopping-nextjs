import FlashDellCard from '@/components/Flash-Deal/FlashDellCard';
import DeliveryQuestion from '@/components/sheard/DeliveryQuestion';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import Slider from '@/components/slider/Slider';
import { getALLflashImage } from '../db/quries';

const HeroPage = async () => {
  const AllFlashs = await getALLflashImage();
  console.log(AllFlashs);

  return (
    <div className='container mx-auto'>
      <Slider />
      <FlashDellCard />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
};

export default HeroPage;
