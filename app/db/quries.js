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

async function getFlashById(flash) {
  const singleProduct = await flashModel.findById(flash).lean();
  return replaceMongoIdInObject(singleProduct);
}

// create Regester

async function createUser(user) {
  return await userModel.create(user);
}

// create Login
async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

export { getALLflashImage, getFlashById, createUser, findUserByCredentials };
