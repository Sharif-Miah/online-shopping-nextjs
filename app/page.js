import FlashDellCard from '@/components/Flash-Deal/FlashDellCard';
import DeliveryQuestion from '@/components/sheard/DeliveryQuestion';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import Slider from '@/components/slider/Slider';

export const metadata = {
  title: 'Online Shopping | Home',
  description: 'Online Shopping Platform Here.',
};

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Slider />
      <FlashDellCard />
      <DeliveryQuestion />
      <QuestionAnswer />
    </div>
  );
}
