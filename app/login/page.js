import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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

        <span className='text-center text-xs text-gray-500'>
          Dont have an account?
          <Link
            className='underline hover:text-[#1455ac]'
            href='/register'>
            Register
          </Link>
        </span>
      </div>
    </section>
  );
};

export default LoginPage;
