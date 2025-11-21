import { Router } from "express";
import authRoutes from "./authRoute";
import roleRoutes from "./roleRoute";
// import userRoleRoutes from "./userRoleRoute";

const router = Router();

router.use("/auth", authRoutes);
router.use("/role", roleRoutes);
// router.use("/user-role", userRoleRoutes);

export default router;
