const { userModel } = require('@/models/user-model');

async function createUser(user) {
  return await userModel.create(user);
}

export { createUser };
