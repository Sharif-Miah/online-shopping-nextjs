import { auth } from '@/auth';
import ProfileForm from '@/components/auth/ProfileForm';
import ProfileInfo from '@/components/auth/ProfileInfo';
import { redirect } from 'next/navigation';

const UserProfilePage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <section className='mt-[30px]'>
        <div className='container'>
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className='w-2/3 mx-auto mb-12'>
          <div className=' '>
            <ProfileForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfilePage;
