import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  title: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
});

export const categoriesModel =
  mongoose.models.categories ?? mongoose.model('categories', schema);
