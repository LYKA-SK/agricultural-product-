import { Router } from "express";
import {
  registerController,
  loginController,
  logoutController,
} from "../controllers/authController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - address
 *               - email
 *               - password
 *
 *             properties:
 *               name:
 *                 type: string
 *                 example: "lyka"
 *               phone:
 *                 type: string
 *                 example: "087972624"
 *               address:
 *                 type: string
 *                 example: "Phnom Penh"
 *               email:
 *                 type: string
 *                 example: "lyka@gmail.com"
 *               password:
 *                 type: string
 *                 example: "1234567"
 *
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/register", registerController);
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@agriconnect.com"
 *               password:
 *                 type: string
 *                 example: "Admin@1234"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */

router.post("/login", loginController);
/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout a user
 *     tags: [Auth]
 *     description: Clears refresh token or ends user session.
 *     responses:
 *       200:
 *         description: Logout successful
 *       500:
 *         description: Internal server error
 */
router.post("/logout", logoutController);

export default router;
