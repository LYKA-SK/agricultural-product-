import { Router } from "express";
import authRoutes from "./authRoute";
import userRoutes from "./roleRoute";
import roleRoutes from "./roleRoute";

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/role", roleRoutes);

export default router;
