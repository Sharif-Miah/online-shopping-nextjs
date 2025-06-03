import { dbConnect } from '@/services/mongo';
import { _NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { userModel } from '@/models/user-model';

export const POST = async (request) => {
  const { name, email, password, phone, bio } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    name,
    email,
    password: hashedPassword,
    phone,
    bio,
  };
  console.log(newUser);

  try {
    await userModel.create(newUser);
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (error) {
    console.log('Error creating user:', error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
