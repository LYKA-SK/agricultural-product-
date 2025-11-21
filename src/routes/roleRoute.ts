import { Router } from "express";
import { createRole } from "../controllers/roleController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role management APIs
 */

/**
 * @swagger
 * /api/v1/role/role-create:
 *   post:
 *     summary: Create a new role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: "farmer"
 *               description:
 *                 type: string
 *                 example: "Role for farmers"
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Role already exists or bad request
 */

router.post("/create-role", createRole);

export default router;
