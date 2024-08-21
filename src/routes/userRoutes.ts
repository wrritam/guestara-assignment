import express from "express";
import { register } from "../controllers/authentication/register";
import { login } from "../controllers/authentication/login";
import { verifyRegistration } from "../controllers/authentication/verify-registration";
import { forgotPassword } from "../controllers/authentication/forgot-password";
import { resetPassword } from "../controllers/authentication/reset-password";
import { verifyUpdation } from "../controllers/authentication/verify-updatation";

import { authentication } from "../middleware/authenticator";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-registration", verifyRegistration);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/verify-updation", verifyUpdation);

export default router;
