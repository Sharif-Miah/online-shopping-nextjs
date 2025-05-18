import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import LoginForm from './auth/LoginForm';

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href='/login'>
          <Button variant='outline'>Share</Button>
        </Link>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
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
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
