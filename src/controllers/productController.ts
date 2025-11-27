import { Request, Response } from "express";
import productService from "../services/productService";
import mongoose from "mongoose";

// CREATE PRODUCT
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// GET ALL PRODUCTS
export const getAllProduct = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// GET PRODUCT BY ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// GET PRODUCTS BY USER ID
export const getProductUser = async (req: Request, res: Response) => {
  try {
    if (!req.query.userId)
      return res.status(400).json({ message: "userId is required" });

    const products = await productService.getProductsByUser(
      req.query.userId as string
    );

    if (!products.length)
      return res.status(404).json({
        message: "Products not found for this user",
      });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid product ID" });

    const deleted = await productService.deleteProduct(id);

    if (!deleted) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deleted,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
