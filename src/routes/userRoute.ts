import { Router } from "express";
import {
  createUserController,
  getUsersController, // <-- updated name
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController";

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
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error or duplicate email
 */
router.post("/create-user", createUserController);

/**
 * @swagger
 * /api/v1/user/get-users:
 *   get:
 *     summary: Get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: List of all users
 *       500:
 *         description: Server error
 */
router.get("/get-users", getUsersController); // <-- updated

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
 *     responses:
 *       200:
 *         description: User fetched
 *       404:
 *         description: Not found
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
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Not found
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
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Not found
 */
router.delete("/delete-user/:id", deleteUserController);

export default router;
