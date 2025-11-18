import { Router } from "express";
import { register, login, logout } from "../controllers/authController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
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
 *               - roles
 *             properties:
 *               name:
 *                 type: string
 *                 example: lyka
 *               phone:
 *                 type: string
 *                 example: "087972624"
 *               address:
 *                 type: string
 *                 example: Phnom Penh
 *               email:
 *                 type: string
 *                 example: lyka@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234567
 *               roles:
 *                 type: string
 *                 enum: [admin, farmer]
 *                 example: farmer
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
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
 *                 example: lyka@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234567
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid email or password
 */

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logged out successfully
 */

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
