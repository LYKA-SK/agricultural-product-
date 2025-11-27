import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProductById,
  getProductUser,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product Management APIs
 */

/**
 * @swagger
 * /api/v1/product/create-product:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Apple iPhone 15"
 *               price:
 *                 type: number
 *                 example: 1299
 *               stock:
 *                 type: number
 *                 example: 50
 *               description:
 *                 type: string
 *                 example: "Latest Apple iPhone"
 *               userId:
 *                 type: string
 *                 example: "6745a3e12c4bf829ab12fcd0"
 *               categoryId:
 *                 type: string
 *                 example: "6745a3e12c4bf829ab12fcd9"
 *               topSeller:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Product created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/create-product", createProduct);
/**
 * @swagger
 * /api/v1/product/get-product:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   stock:
 *                     type: number
 *                   description:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   categoryId:
 *                     type: string
 *                   topSeller:
 *                     type: boolean
 *       500:
 *         description: Internal server error
 */
router.get("/get-product", getAllProduct);
/**
 * @swagger
 * /api/v1/product/get-product/{id}:
 *   get:
 *     summary: Get a product by its ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stock:
 *                   type: number
 *                 description:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 categoryId:
 *                   type: string
 *                 topSeller:
 *                   type: boolean
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get("/get-product/:id", getProductById);
/**
 * @swagger
 * /api/v1/product/get-user-products:
 *   get:
 *     summary: Get products created by a specific user
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user whose products you want to fetch
 *         example: "6745a3e12c4bf829ab12fcd0"
 *     responses:
 *       200:
 *         description: List of products for the specified user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Products fetched successfully
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       price:
 *                         type: number
 *                       stock:
 *                         type: number
 *                       description:
 *                         type: string
 *                       categoryId:
 *                         type: string
 *                       topSeller:
 *                         type: boolean
 *       404:
 *         description: No products found for this user
 *       500:
 *         description: Internal server error
 */
router.get("/get-user-products", getProductUser);

/**
 * @swagger
 * /api/v1/product/update-product/{id}:
 *   put:
 *     summary: Update an existing product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The product ID
 *         schema:
 *           type: string
 *           example: "69266888c92afdf821da55e5"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Samsung Galaxy S24"
 *               price:
 *                 type: number
 *                 example: 999
 *               stock:
 *                 type: number
 *                 example: 25
 *               description:
 *                 type: string
 *                 example: "Latest Samsung flagship phone"
 *               userId:
 *                 type: string
 *                 example: "6745a3e12c4bf829ab12fcd0"
 *               categoryId:
 *                 type: string
 *                 example: "6745a3e12c4bf829ab12fcd9"
 *               topSeller:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

router.put("/update-product/:id", updateProduct);
/**
 * @swagger
 * /api/v1/product/delete-product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

router.delete("/delete-product/:id", deleteProduct);

export default router;
