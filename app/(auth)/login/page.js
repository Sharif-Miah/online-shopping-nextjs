import LoginDetails from '@/components/auth/LoginDetails';
import LoginForm from '@/components/auth/LoginForm';
import SocialLogins from '@/components/auth/SocialLogins';
import Link from 'next/link';

export const metadata = {
  title: 'Online Shopping | Login',
  description: 'If you buy any product  Login first.',
};

const LoginPage = () => {
  return (
    <section className='h-screen grid place-items-center bg-[#fafbfc]'>
      <div className='max-w-[450px] w-full mx-auto p-6 border bg-[#ffffff] text-black border-gray-700/20 rounded-md'>
        <h4 className='font-bold text-2xl'>Sign in</h4>
        <LoginForm />
        <SocialLogins mode='login' />
      </div>
    </section>
  );
};

export default LoginPage;
