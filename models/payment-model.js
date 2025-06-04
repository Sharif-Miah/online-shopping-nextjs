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
    type: Number,
  },
  price: {
    required: true,
    type: Number,
  },
  cvc: {
    required: true,
    type: Number,
  },
  date: {
    required: true,
    type: String,
  },
});

export const paymentModel =
  mongoose.models.payment ?? mongoose.model('payment', schema);
