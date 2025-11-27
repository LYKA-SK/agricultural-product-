import { Router } from "express";
import authRoutes from "./authRoute";
import userRoutes from "./userRoute";
import productRoutes from "./productRoute";
import cartRoutes from "./cartRoute";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);
export default router;
