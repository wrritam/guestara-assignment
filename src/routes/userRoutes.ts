import express from "express";
import { register } from "../controllers/authentication/register";
import { login } from "../controllers/authentication/login";
import { verifyRegistration } from "../controllers/authentication/verify-registration";
import { forgotPassword } from "../controllers/authentication/forgot-password";
import { resetPassword } from "../controllers/authentication/reset-password";
import { verifyUpdation } from "../controllers/authentication/verify-updatation";

import { authentication } from "../middleware/authenticator";

import { createCategory } from "../controllers/funtionality/category/createCategory";
import {
  getAllCategories,
  getCategoryById,
} from "../controllers/funtionality/category/getCategory";
import { editCategory } from "../controllers/funtionality/category/editCategory";

import { createSubCategory } from "../controllers/funtionality/subcategory/createSubCategory";
import {
  getAllSubCategories,
  getSubCategorybyId,
  getSubCategoryUnderCategory,
} from "../controllers/funtionality/subcategory/getSubCategory";
import { editSubCategory } from "../controllers/funtionality/subcategory/editSubCategory";

import {
  addItemUnderSubCategory,
  addItemUnderCategory,
} from "../controllers/funtionality/Item/addItem";
import {
  getAllItems,
  getItemsUnderCategory,
  getItemsUnderSubCategory,
  getItemById,
} from "../controllers/funtionality/Item/getItem";
import { editItem } from "../controllers/funtionality/Item/editItem";
import { searchItemByName } from "../controllers/funtionality/Item/searchItemByName";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-registration", verifyRegistration);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-updation", verifyUpdation);

router.post("/create-category", authentication, createCategory);
router.get("/get-all-categories", authentication, getAllCategories);
router.get("/get-category/:id", authentication, getCategoryById);
router.put("/edit-category/:id", authentication, editCategory);

router.post(
  "/:categoryId/create-subcategory",
  authentication,
  createSubCategory
);
router.get("/get-all-subcategories", authentication, getAllSubCategories);
router.get(
  "/get-subcategory/:subCategoryId",
  authentication,
  getSubCategorybyId
);
router.get(
  "/get-subcategory-under-category/:categoryId",
  authentication,
  getSubCategoryUnderCategory
);
router.put("/edit-subcategory/:id", authentication, editSubCategory);

router.post(
  "/add-item-under-subcategory/:categoryId/:subCategoryId",
  authentication,
  addItemUnderSubCategory
);
router.post(
  "/add-item-under-category/:categoryId",
  authentication,
  addItemUnderCategory
);
router.get("/get-all-items", authentication, getAllItems);
router.get(
  "/get-items-under-category/:categoryId",
  authentication,
  getItemsUnderCategory
);
router.get(
  "/get-items-under-subcategory/:subCategoryId",
  authentication,
  getItemsUnderSubCategory
);
router.get("/get-item/:itemId", authentication, getItemById);
router.put("/edit-item/:itemId", authentication, editItem);
router.post("/search-item", authentication, searchItemByName);

export default router;
