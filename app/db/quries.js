import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils';

import { userModel } from '@/models/user-model';
import { flashModel } from '@/models/flash-image-model';
import { paymentModel } from '@/models/payment-model';
import { featureModel } from '@/models/feture-model';
import { categoriesModel } from '@/models/categories';

// ---------------------- create All flash product start -------------------------

async function getALLflashImage() {
  const allFlashImages = await flashModel.find().lean();
  return replaceMongoIdInArray(allFlashImages);
}

async function getFlashById(flashId) {
  const singleProduct = await flashModel.findById(flashId).lean();
  return replaceMongoIdInObject(singleProduct);
}
// ---------------------- create All flash product end -------------------------

// ------------------- create feture product start ---------------------

async function getALLfeatureImage() {
  const allFeatureImages = await featureModel.find().lean();
  return replaceMongoIdInArray(allFeatureImages);
}

async function getFeatureById(featureId) {
  const featureProduct = await featureModel.findById(featureId).lean();
  return replaceMongoIdInObject(featureProduct);
}

// ------------------- create feture product end ---------------------

// ------------- categories product start --------------------

async function getAllCategories() {
  const categories = await categoriesModel.find().lean();
  return replaceMongoIdInArray(categories);
}

// ------------- categories product end --------------------

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
  getFlashById,
  getALLfeatureImage,
  getFeatureById,
  getAllCategories,
  findUserByCredentials,
  getUserByEmail,
  getAllBooking,
};
