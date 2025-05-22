import LoginForm from './LoginForm';
import SocialLogins from './SocialLogins';

const LoginDetails = () => {
  return (
    <section className='h-screen grid place-items-center bg-[#fafbfc]'>
      <div className='max-w-[450px] w-full mx-auto p-6 border bg-[#ffffff] text-black border-gray-700/20 rounded-md'>
        <h4 className='font-bold text-2xl'>Sign in</h4>
        <LoginForm />
        <SocialLogins />
      </div>
    </section>
  );
};

export default LoginDetails;
