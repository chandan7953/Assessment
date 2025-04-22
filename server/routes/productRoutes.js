import express from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/addproduct", isAuthenticated, upload.single("photo"), addProduct);
export default router;
