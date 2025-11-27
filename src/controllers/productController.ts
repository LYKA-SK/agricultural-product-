import { Request, Response } from "express"; // import types for request/response
import productService from "../services/productService"; // import service layer
import mongoose from "mongoose"; // for ObjectId validation

// CREATE PRODUCT
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body); // call service

    return res.status(201).json({
      // success response
      message: "Product created successfully",
      product,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error handling
  }
};

// GET ALL PRODUCTS
export const getAllProduct = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts(); // call service
    return res.status(200).json({ success: true, products }); // success
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error
  }
};

// GET PRODUCT BY ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id); // call service

    if (!product) return res.status(404).json({ message: "Product not found" }); // 404

    return res.status(200).json({ success: true, product }); // success
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error
  }
};

// GET PRODUCTS BY USER
export const getProductUser = async (req: Request, res: Response) => {
  try {
    if (!req.query.userId)
      // check query param
      return res.status(400).json({ message: "userId is required" }); // 400

    const products = await productService.getProductsByUser(
      req.query.userId as string
    ); // call service

    if (!products.length)
      // no products found
      return res
        .status(404)
        .json({ message: "Products not found for this user" }); // 404

    return res.status(200).json({ success: true, products }); // success
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    ); // call service

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" }); // 404

    return res.status(200).json({
      // success
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      // check if valid ObjectId
      return res.status(400).json({ message: "Invalid product ID" }); // 400

    const deleted = await productService.deleteProduct(id); // call service

    if (!deleted) return res.status(404).json({ message: "Product not found" }); // 404

    return res.status(200).json({
      // success
      message: "Product deleted successfully",
      product: deleted,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message }); // error
  }
};
