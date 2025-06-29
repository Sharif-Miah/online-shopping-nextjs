import { getWomanFashionProductById } from '@/app/db/quries';

const WomenFashionDetails = async ({ params: { id } }) => {
  const product = await getWomanFashionProductById(id);
  console.log(product);

  return <div>WomenFashionDetails</div>;
};

export default WomenFashionDetails;
