'use server';

const { createUser } = require('@/app/db/quries');
import { signIn } from '@/auth';

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect('/login');
}

async function login(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { registerUser, login };
