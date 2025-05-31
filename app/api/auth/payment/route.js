import { paymentModel } from '@/models/payment-model';
import { dbConnect } from '@/services/mongo';
import { _NextRequest, NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, card, price, cvc, date } = await request.json();

  await dbConnect();

  const payload = {
    name,
    email,
    card,
    price,
    cvc,
    date,
  };

  console.log(payload);

  try {
    await paymentModel.create(payload);
    return new NextResponse('Payment Successful done', {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
