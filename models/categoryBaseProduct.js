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
  rating: {
    required: true,
    type: Number,
  },
  categories: {
    required: true,
    type: String,
  },
});

export const categoryBaseModel =
  mongoose.models.categoriesbaseproducts ??
  mongoose.model('categoriesbaseproducts', schema);
