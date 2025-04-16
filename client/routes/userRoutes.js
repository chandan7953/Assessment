import express from "express";
import { register, login, logout } from "../controllers/userController.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/register", upload.single("profile_photo"), register);
router.post("/login", login);
router.get("/logout", logout);
export default router;
