import LoginDetails from '@/components/auth/LoginDetails';
import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export const metadata = {
  title: 'Online Shopping | Login',
  description: 'If you buy any product  Login first.',
};

const LoginPage = () => {
  return <LoginDetails />;
};

export default LoginPage;
