import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  title: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  discount: {
    required: true,
    type: Number,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const flashModel =
  mongoose.models.flashimages ?? mongoose.model('flashimages', schema);
