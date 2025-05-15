import { replaceMongoIdInObject } from '@/utils/data-utils';

import { userModel } from '@/models/user-model';

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

export { createUser, findUserByCredentials };
