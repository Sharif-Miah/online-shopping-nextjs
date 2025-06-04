import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Image from 'next/image';
import QuestionAnswer from '@/components/sheard/QuestionAnswer';
import money from '@/public/money.png';
import PaymentForm from '@/components/Payment/PaymentForm';
import OnlinePayment from '@/components/Payment/OnlinePayment';
import PaymentChairt from '@/components/Payment/PaymentChairt';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getFeatureById, getUserByEmail } from '@/app/db/quries';

const PaymentPage = async ({ params: { id } }) => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const productInfo = await getFeatureById(id);

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='my-8'>
        <h3 className='my-3 text-center text-3xl font-semibold text-black uppercase'>
          Payment method
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-3 gap-6'>
          <div className='col-span-2'>
            <PaymentChairt />
            <div className='bg-white rounded border-2 border-gray-200 py-4 px-6 mt-3'>
              <div className='gap-1 mr-4'>
                <Link href='/'>
                  <p className='text-[#1455ac] flex justify-end gap-1'>
                    <MdOutlineKeyboardArrowLeft className='text-[#1455ac] mt-[6px]' />
                    Go back
                  </p>
                </Link>
              </div>
              <h3 className='my-2 text-2xl font-normal text-black'>
                Payment method
              </h3>
              <h3 className='my-4 text-lg font-normal text-black'>
                Select a payment method to proceed
              </h3>
              <div>
                <RadioGroup>
                  <div className='flex items-center border-2 border-gray-100 rounded w-[230px] px-5 py-3 space-x-2'>
                    <RadioGroupItem
                      value='default'
                      id='r1'
                    />
                    <Image
                      src={money}
                      width={100}
                      height={100}
                      alt='money'
                      className='w-5'
                    />
                    <Label htmlFor='r1'>Cash on Delivery</Label>
                  </div>
                </RadioGroup>
                <h3 className='my-8 text-xl font-normal text-black'>
                  Pay via online
                </h3>

                <div>
                  <OnlinePayment />
                  <div className='flex bg-[#f3f5f9] px-4 py-4 mb-3 rounded'>
                    <div className='flex items-center rounded w-[230px] px-5 py-3 space-x-2'>
                      <Label htmlFor='r1'>Payment Other Option</Label>
                    </div>
                  </div>
                  <div>
                    <PaymentForm
                      loggedInUser={loggedInUser}
                      price={productInfo.price}
                    />
                  </div>
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

export default PaymentPage;
