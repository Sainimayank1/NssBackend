import express from "express";
import verifyEmail from "../controllers/auth/verifyEmail.js";
import { registeration , registerValidation} from "../controllers/auth/UserRegisteration.js";
import { Login , loginValidation } from "../controllers/auth/UserLogin.js";
const router = express.Router();




//          REDIRECT TO USERRIGESTRATION CONTROLLER


router.post("/register", registerValidation, registeration)
router.post("/login", loginValidation, Login)
router.get("/users/:id/verify/:token/",verifyEmail)

export default router;

// 