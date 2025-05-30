import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils';

import { userModel } from '@/models/user-model';
import { flashModel } from '@/models/flash-image-model';

// create All flash product

async function getALLflashImage() {
  const allFlashImages = await flashModel.find().lean();
  return replaceMongoIdInArray(allFlashImages);
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

export {
  getALLflashImage,
  getFlashById,
  findUserByCredentials,
  getUserByEmail,
};
