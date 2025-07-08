import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils';

import { userModel } from '@/models/user-model';
import { flashModel } from '@/models/flash-image-model';
import { paymentModel } from '@/models/payment-model';
import { featureModel } from '@/models/feture-model';
import { categoriesModel } from '@/models/categories';
import { categoryBaseModel } from '@/models/categoryBaseProduct';
import { featuredDealeModel } from '@/models/featuredDeal';
import { letestProductModel } from '@/models/latestProducts';
import { newArrivalsModel } from '@/models/newArrivals';
import { womenFashionModel } from '@/models/women-fashion';
import { phoneAndGadgetsnModel } from '@/models/PhoneAndGadget';
import { healthAndBeutyModel } from '@/models/healthBauty';
import { electronicAndGatesModel } from '@/models/electronicGates';
import { mensFashionModel } from '@/models/mensfashion';
import { kidsFashionModel } from '@/models/kidsfashion';

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
// ------------------- create fetured Deal product start ---------------------

async function getALLFeaturedeal() {
  const allFeatureDealImages = await featuredDealeModel.find().lean();
  return replaceMongoIdInArray(allFeatureDealImages);
}

async function getFeaturedealById(featureId) {
  const featureDealProduct = await featuredDealeModel
    .findById(featureId)
    .lean();
  return replaceMongoIdInObject(featureDealProduct);
}

// ------------------- create fetured Deal product end ---------------------

// ------------- categories product start --------------------

async function getAllCategories() {
  const categories = await categoriesModel.find().lean();
  return replaceMongoIdInArray(categories);
}

async function getCategoriesById(categoryId) {
  const singleCategoryProduct = await categoriesModel
    .findById(categoryId)
    .lean();
  return replaceMongoIdInObject(singleCategoryProduct);
}

// ------------- categories product end --------------------

// ------------- Latest Product Base product start --------------------

async function getAllLatestProduct() {
  const latestProduct = await letestProductModel.find().lean();
  return replaceMongoIdInArray(latestProduct);
}

async function getLatestProductById(latestId) {
  const singleLatestProduct = await letestProductModel
    .findById(latestId)
    .lean();
  return replaceMongoIdInObject(singleLatestProduct);
}

// ------------- Latest Product Base product end --------------------

// ------------- Nwe Arrivals Product Base product start --------------------

async function getAllNewArrivals() {
  const latestProduct = await newArrivalsModel.find().lean();
  return replaceMongoIdInArray(latestProduct);
}

async function getNewArrivalsProductById(newArrivalsId) {
  const singleLatestProduct = await newArrivalsModel
    .findById(newArrivalsId)
    .lean();
  return replaceMongoIdInObject(singleLatestProduct);
}

// ------------- Nwe Arrivals Product Base product end --------------------

// ------------- Women Fashion Product Base product start --------------------

async function getAllWomanFashion() {
  const womanProduct = await womenFashionModel.find().lean();
  return replaceMongoIdInArray(womanProduct);
}

async function getWomanFashionProductById(womenId) {
  const singleWomenProduct = await womenFashionModel.findById(womenId).lean();
  return replaceMongoIdInObject(singleWomenProduct);
}

// ------------- Women Fashion Product Base product end --------------------

// ------------- Phone & Gadgets Product Base product start --------------------

async function getAllPhoneAndGadgets() {
  const gadgetsproduct = await phoneAndGadgetsnModel.find().lean();
  return replaceMongoIdInArray(gadgetsproduct);
}

async function getPhoneAndGadgetsProductById(gajesId) {
  const singleProduct = await phoneAndGadgetsnModel.findById(gajesId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// ------------- Phone & Gadgets Product Base product end --------------------

// ------------- Health & Beauty Product Base product start --------------------

async function getAllHealthAndBeuty() {
  const product = await healthAndBeutyModel.find().lean();
  return replaceMongoIdInArray(product);
}

async function getHealthAndBeutyProductById(beutiId) {
  const singleProduct = await healthAndBeutyModel.findById(beutiId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// ------------- Health & Beauty Product Base product end --------------------

// ------------- Electronics & Gadgets Product Base product start --------------------

async function getAllElectricGadgets() {
  const product = await electronicAndGatesModel.find().lean();
  return replaceMongoIdInArray(product);
}

async function getElectricGadgetsProductById(gadgetId) {
  const singleProduct = await electronicAndGatesModel.findById(gadgetId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// ------------- Electronics & Gadgets Product Base product end --------------------

// ------------- Mens Fashion Product Base product start --------------------

async function getAllMenFashion() {
  const product = await mensFashionModel.find().lean();
  return replaceMongoIdInArray(product);
}

async function getMenFashionProductById(menId) {
  const singleProduct = await mensFashionModel.findById(GadgetId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// ------------- Mens Fashion Product Base product end --------------------

// ------------- Mens Fashion Product Base product start --------------------

async function getAllKidsFashion() {
  const product = await kidsFashionModel.find().lean();
  return replaceMongoIdInArray(product);
}

async function getKidsFashionProductById(kidId) {
  const singleProduct = await kidsFashionModel.findById(kidId).lean();
  return replaceMongoIdInObject(singleProduct);
}

// ------------- Mens Fashion Product Base product end --------------------

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
  getALLFeaturedeal,
  getFeaturedealById,
  getAllCategories,
  getCategoriesById,
  getAllLatestProduct,
  getLatestProductById,
  getAllNewArrivals,
  getNewArrivalsProductById,
  getAllWomanFashion,
  getWomanFashionProductById,
  getAllPhoneAndGadgets,
  getPhoneAndGadgetsProductById,
  getAllHealthAndBeuty,
  getHealthAndBeutyProductById,
  getAllElectricGadgets,
  getElectricGadgetsProductById,
  getAllMenFashion,
  getMenFashionProductById,
  getAllKidsFashion,
  getKidsFashionProductById,
  findUserByCredentials,
  getUserByEmail,
  getAllBooking,
};
