import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils';

import { userModel } from '@/models/user-model';
import { flashModel } from '@/models/flash-image-model';
import { paymentModel } from '@/models/payment-model';
import { featureModel } from '@/models/feture-model';

// create All flash product

async function getALLflashImage() {
  const allFlashImages = await flashModel.find().lean();
  return replaceMongoIdInArray(allFlashImages);
}
async function getALLfeatureImage() {
  const allFeatureImages = await featureModel.find();
  console.log(allFeatureImages);
  return replaceMongoIdInArray(allFeatureImages);
}

// create single flash deetails product

async function getFlashById(flashId) {
  const singleProduct = await flashModel.findById(flashId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// create Login
async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function getUserByEmail(email) {
  const user = await userModel.find({ email: email }).lean();
  return replaceMongoIdInObject(user[0]);
}

// Booking Data

async function getAllBooking() {
  const allBookings = await paymentModel.find().lean();
  return replaceMongoIdInArray(allBookings);
}

// create Fature product

export {
  getALLflashImage,
  getALLfeatureImage,
  getFlashById,
  findUserByCredentials,
  getUserByEmail,
  getAllBooking,
};
