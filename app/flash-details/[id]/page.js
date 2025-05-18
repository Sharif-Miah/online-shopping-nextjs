import FeaturedCardItem from '@/components/FeaturedCardItem/FeaturedCardItem';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import { Card, CardContent } from '@/components/ui/card';
import slider1 from '@/public/bannerimg.webp';
import slider2 from '@/public/slider2.jpg';
import slider3 from '@/public/slider3.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';

const FlashDetailsPage = () => {
  const sliders = [
    {
      id: 1,
      img: slider1,
    },
    {
      id: 2,
      img: slider2,
    },
    {
      id: 3,
      img: slider3,
    },
  ];

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='my-8'>
        <div className='flex flex-col md:flex-row  gap-2'>
          <div className='flex-shrink-0 w-full md:w-1/3 '>
            {/* Single Image Carosel  */}
            <Carousel className='w-full  max-w-6xl min-h-8 mx-auto '>
              <CarouselContent className='-ml-1'>
                {sliders.map((sli) => (
                  <CarouselItem
                    key={sli.id}
                    className=' pl-1 md:basis-1/1 lg:basis-1/1'>
                    <div className='p-1'>
                      <Card className=' py-0 h-[400px] border-none shadow-none '>
                        <CardContent className=''>
                          <Image
                            src={sli.img}
                            className='rounded'
                            alt=''
                            width={1600}
                            height={700}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className='flex-grow w-full md:w-2/3  ml-5'>
            <div className='flex flex-col md:flex-row gap-2'>
              {/* Middle Column  */}
              <div className='flex-grow w-full md:w-2/3 '>
                <div>
                  <h2 className='text-xl font-bold mt-6'>
                    Exclusive & Fashionable Suit For Men
                  </h2>
                  <div className='flex'>
                    <div className='flex gap-[6px]  text-[#ff7d1e] my-2 text-md '>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className='mt-1 ml-2 font-semibold text-gray-600'>
                      (5.00)
                    </span>
                    <div className='flex mt-1 border-r-2'>
                      <span className='ml-3 font-semibold text-gray-600 '>
                        1
                      </span>
                      <span className='ml-2  font-semibold text-gray-600 mr-3'>
                        reviews
                      </span>
                    </div>
                    <div className='flex mt-1 border-r-2'>
                      <span className='ml-3  font-semibold text-gray-600 '>
                        30
                      </span>
                      <span className='ml-2  font-semibold text-gray-600 mr-3'>
                        orders
                      </span>
                    </div>
                    <div className='flex mt-1  border-r-2'>
                      <span className='ml-3  font-semibold text-gray-600 '>
                        0
                      </span>
                      <span className='ml-2  font-semibold text-gray-600 mr-3'>
                        wished
                      </span>
                    </div>
                  </div>
                  <div className='flex gap-1'>
                    <p className='text-xl text-[#1455ac] mt-1 font-bold'>
                      $450.00
                    </p>
                    <p className='text-[16px] mt-3 font-bold line-through text-gray-400'>
                      $500.00
                    </p>
                  </div>
                  <div className='flex mt-3'>
                    <h4 className='text-md font-semibold mt-1'>Color:</h4>
                    <div className='ml-4'>
                      <button className='bg-[#9966CC] text-[#9966CC] py-1 mt-0  border-white px-[10px] rounded-3xl'>
                        0
                      </button>
                      <button className='bg-[#FAEBD7] text-[#FAEBD7]  py-1 mt-0  ml-2 border-white px-[10px] rounded-3xl'>
                        0
                      </button>
                    </div>
                  </div>
                  <div className='flex mt-3'>
                    <h4 className='text-md font-semibold mt-1'>Size:</h4>
                    <div className='ml-4'>
                      <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  border-black px-[10px] rounded'>
                        s
                      </button>
                      <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  ml-2 border-black px-[10px] rounded'>
                        L
                      </button>
                    </div>
                  </div>
                  <div className='flex mt-2'>
                    <h4 className='text-md font-semibold mt-2'>Quentity:</h4>
                    <div className='ml-4 border py-0 px-3 bg-[#FAEBD7] border-black'>
                      <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  border-black px-2 rounded'>
                        -
                      </button>
                      <span className='ml-2 bg-white px-4 py-1 rounded-lg'>
                        0
                      </span>
                      <button className='bg-[#FAEBD7] text-[#171718] text-lg py-1 mt-0  ml-2 border-black px-2  rounded'>
                        +
                      </button>
                    </div>
                  </div>
                  <div className='flex mt-2'>
                    <h4 className='text-md font-semibold mt-2'>Total Price:</h4>
                    <div className='ml-4 mt-2 py-0 '>
                      <span className=' text-lg font-bold text-[#1455ac]'>
                        $475.00
                      </span>
                    </div>
                  </div>

                  <div className='mt-5 flex'>
                    <button className='bg-[#dd7f13] hover:bg-[#c47112] text-white font-normal text-md  py-2 mt-0  ml-2 border-black px-5  rounded'>
                      Buy Now
                    </button>

                    <button className='bg-[#1455ac] hover:bg-[#0f468f] text-white font-normal text-md  py-2 mt-0  ml-2 border-black px-3  rounded'>
                      Add to Card
                    </button>

                    {/* wish list design  */}

                    <button className='flex cursor-pointer ml-6'>
                      <div className='flex gap-1 py-1  rounded border border-gray-300 px-3 '>
                        <FaHeart className='text-xl mt-1 text-[#1455ac]' />
                        <p className='  text-md'>0</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Last column  */}
              <div className='flex-shrink-0 w-full md:w-1/3 '>
                <div className='bg-white rounded py-6 px-4'>
                  <div className='flex'>
                    <Image
                      src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
                      width={100}
                      height={100}
                      alt='car img'
                      className='w-7 mt-2'
                    />
                    <p className='text-sm mt-3 ml-2'>
                      Fast Delivery all across the country
                    </p>
                  </div>
                  <div className='flex mt-2'>
                    <Image
                      src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
                      width={100}
                      height={100}
                      alt='car img'
                      className='w-7 mt-2'
                    />
                    <p className='text-sm mt-3 ml-2'> Safe Payment</p>
                  </div>
                  <div className='flex mt-2'>
                    <Image
                      src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
                      width={100}
                      height={100}
                      alt='car img'
                      className='w-7 mt-2'
                    />
                    <p className='text-sm mt-3 ml-2'> 7 Days Return Policy</p>
                  </div>
                  <div className='flex mt-2'>
                    <Image
                      src='https://res.cloudinary.com/dnuxd0pd0/image/upload/v1747534805/dress_tykqo5.webp'
                      width={100}
                      height={100}
                      alt='car img'
                      className='w-7 mt-2'
                    />
                    <p className='text-sm mt-3 ml-2'>100% Authentic Products</p>
                  </div>
                </div>

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
              </div>
            </div>
          </div>
        </div>

        <QuestionAnswer />
      </div>
    </section>
  );
};

export default FlashDetailsPage;
