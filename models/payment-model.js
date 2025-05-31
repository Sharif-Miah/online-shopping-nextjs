import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  card: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: String,
  },
  cvc: {
    required: true,
    type: String,
  },
});

export const paymentModel =
  mongoose.models.payment ?? mongoose.model('payment', schema);
