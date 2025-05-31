import { getALLflashImage } from '@/app/db/quries';
import SheardTitle from '../sheard/SheardTitle';
import ViewButton from '../sheard/ViewButton';
import CardWithFlasDeal from './CardWithFlasDeal';

const FlashDellCard = async () => {
  const allFlashPhotos = await getALLflashImage();

  return (
    <section className=' bg-gradient-to-r from-[#f0f4fe] to-[#edecfe] py-6 px-6 rounded mt-6'>
      <SheardTitle title='Flash Deal' />
      <div>
        <ViewButton />
      </div>

      <div className='grid grid-cols-1 gap-1 justify-center  lg:grid-cols-4 mt-4'>
        {allFlashPhotos.map((photo) => (
          <CardWithFlasDeal
            key={photo.id}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
};

export default FlashDellCard;
