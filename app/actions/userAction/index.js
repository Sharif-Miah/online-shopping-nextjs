'use server';

const { createUser } = require('@/app/db/quries');
const { redirect } = require('next/navigation');

async function registerUser(formdata) {
  const user = Object.fromEntries(formdata);
  const created = await createUser(user);
  redirect('/login');
}

export { registerUser };
