import { Router } from "express";
import {
  createUserController,
  getUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController";
import { get } from "http";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User Management APIs
 */

/**
 * @swagger
 * /api/v1/user/create-user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - address
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Bin Lyka"
 *               phone:
 *                 type: string
 *                 example: "087123456"
 *               address:
 *                 type: string
 *                 example: "Phnom Penh, Cambodia"
 *               email:
 *                 type: string
 *                 example: "lyka@gmail.com"
 *               password:
 *                 type: string
 *                 example: "secret123"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *                 user:
 *                   type: object
 *       400:
 *         description: Validation error or duplicate email
 */

router.post("/create-user", createUserController);
/**
 * @swagger
 * /api/v1/user/get-user:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Users fetched successfully
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "6745a3e12c4bf829ab12fcd0"
 *                       name:
 *                         type: string
 *                         example: "Bin Lyka"
 *                       phone:
 *                         type: string
 *                         example: "087123456"
 *                       address:
 *                         type: string
 *                         example: "Phnom Penh"
 *                       email:
 *                         type: string
 *                         example: "lyka@gmail.com"
 *       500:
 *         description: Server error
 */

router.get("/get-user", getUserController);
/**
 * @swagger
 * /api/v1/user/get-user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *         example: 6745a3e12c4bf829ab12fcd0
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User fetched successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "6745a3e12c4bf829ab12fcd0"
 *                     name:
 *                       type: string
 *                       example: "Bin Lyka"
 *                     phone:
 *                       type: string
 *                       example: "087123456"
 *                     address:
 *                       type: string
 *                       example: "Phnom Penh, Cambodia"
 *                     email:
 *                       type: string
 *                       example: "lyka@gmail.com"
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

router.get("/get-user/:id", getUserByIdController);
/**
 * @swagger
 * /api/v1/user/update-user/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Name"
 *               phone:
 *                 type: string
 *                 example: "098765432"
 *               address:
 *                 type: string
 *                 example: "Siem Reap"
 *               email:
 *                 type: string
 *                 example: "updated@gmail.com"
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put("/update-user/:id", updateUserController);
/**
 * @swagger
 * /api/v1/user/delete-user/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *         example: 6745a3e12c4bf829ab12fcd0
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */

router.delete("/delete-user/:id", deleteUserController);

export default router;
