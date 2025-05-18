import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils';

import { userModel } from '@/models/user-model';
import { flashModel } from '@/models/flash-image-model';

async function getALLflashImage() {
  const allFlashImages = await flashModel.find().lean();
  return replaceMongoIdInArray(allFlashImages);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

export { getALLflashImage, createUser, findUserByCredentials };
