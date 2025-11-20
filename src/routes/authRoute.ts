import { Router } from "express";
import {
  registerController,
  loginController,
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
 *                 example: "lyka@gmail.com"
 *               password:
 *                 type: string
 *                 example: "1234567"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */

router.post("/register", registerController);

router.post("/login", loginController);

export default router;
