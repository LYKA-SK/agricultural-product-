import { Router } from "express";
import {
  createCartController,
  getCartByUserController,
  addItemToCartController,
  updateCartItemController,
  deleteCartItemController,
} from "../controllers/cartController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management endpoints
 */

/**
 * @swagger
 * /api/v1/cart/create:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "675a2c5b831a7f517c123abc"
 *             required:
 *               - userId
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       500:
 *         description: Server error
 */
router.post("/create", createCartController);

/**
 * @swagger
 * /api/v1/cart/user/{userId}:
 *   get:
 *     summary: Get cart by user ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           example: "675a2c5b831a7f517c123abc"
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: Cart retrieved successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.get("/user/:userId", getCartByUserController);

/**
 * @swagger
 * /api/v1/cart/item/add:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cartId:
 *                 type: string
 *                 example: "675b123c9a1dfb3ce4bbabcd"
 *               productId:
 *                 type: string
 *                 example: "674fa221bc99a64a110234ff"
 *               quantity:
 *                 type: number
 *                 example: 2
 *               price:
 *                 type: number
 *                 example: 5.50
 *             required:
 *               - cartId
 *               - productId
 *               - quantity
 *               - price
 *     responses:
 *       201:
 *         description: Item added successfully
 *       500:
 *         description: Server error
 */
router.post("/item/add", addItemToCartController);

/**
 * @swagger
 * /api/v1/cart/item/update/{id}:
 *   put:
 *     summary: Update cart item quantity
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: "675bf221bc99b64a110233ab"
 *         required: true
 *         description: Cart item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: number
 *                 example: 3
 *             required:
 *               - quantity
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */
router.put("/item/update/:id", updateCartItemController);

/**
 * @swagger
 * /api/v1/cart/item/delete/{id}:
 *   delete:
 *     summary: Delete a cart item
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: "675bf221bc99b64a110233ab"
 *         required: true
 *         description: Cart item ID
 *     responses:
 *       200:
 *         description: Item removed successfully
 *       404:
 *         description: Item not found
 *       500:
 *         description: Server error
 */
router.delete("/item/delete/:id", deleteCartItemController);

export default router;
