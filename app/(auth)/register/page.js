import RegisterForm from '@/components/auth/RegisterForm';
import SocialLogins from '@/components/auth/SocialLogins';
import Link from 'next/link';

export const metadata = {
  title: 'Online Shopping | Register',
  description: 'If you buy any product  Login first.',
};

const RegisterPage = () => {
  return (
    <section className='my-10 grid place-items-center bg-[#fafbfc]'>
      <div className='max-w-[450px] w-full mx-auto p-6 border bg-[#ffffff] text-black border-gray-700/20 rounded-md'>
        <h4 className='font-bold text-2xl'>Register</h4>
        <RegisterForm />
        <SocialLogins />
        <span className='text-center text-xs text-gray-500'>
          Already have an account?
          <Link
            className='underline hover:text-[#1455ac]'
            href='/login'>
            Login
          </Link>
        </span>
      </div>
    </section>
  );
};

export default RegisterPage;
