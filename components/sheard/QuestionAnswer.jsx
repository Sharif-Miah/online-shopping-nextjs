import { Card, CardContent } from '@/components/ui/card';
import about from '@/public/questionanswer/about-company.png';
import contact from '@/public/questionanswer/contact-us.png';
import faq from '@/public/questionanswer/faq.png';
import Image from 'next/image';

const QuestionAnswer = () => {
  return (
    <section className='my-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 '>
        <div className='mx-auto'>
          <Card className='w-[280px] py-10 rounded'>
            <div className='flex justify-center'>
              <Image
                src={about}
                alt='about img'
              />
            </div>
            <CardContent>
              <h3 className='text-center mt-3 text-lg font-semibold'>
                About Us
              </h3>
              <p className=' text-center text-md '>
                Know about our company more
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='mx-auto'>
          <Card className='w-[270px] py-10 rounded'>
            <div className='flex justify-center'>
              <Image
                src={contact}
                alt='about img'
              />
            </div>
            <CardContent>
              <h3 className='text-center mt-3 text-lg font-semibold'>
                Contact us
              </h3>
              <p className='text-center text-md '>We are Here to Help</p>
            </CardContent>
          </Card>
        </div>
        <div className='mx-auto'>
          <Card className='w-[270px] py-10 rounded'>
            <div className='flex justify-center'>
              <Image
                src={faq}
                alt='about img'
              />
            </div>
            <CardContent>
              <h3 className='text-center mt-3 text-lg font-semibold'>F&Q</h3>
              <p className='text-center text-md '>Get All Answer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuestionAnswer;
