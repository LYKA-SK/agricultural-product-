import Product from "../models/productModel";
import mongoose from "mongoose";

export default {
  // Create Product
  createProduct: async (data: any) => {
    data.topSeller = true; // force TRUE
    const product = new Product(data);
    return await product.save();
  },

  // Get all products
  getAllProducts: async () => {
    return await Product.find()
      .populate("userId", "name email")
      .populate("categoryId", "name");
  },

  // Get product by ID
  getProductById: async (id: string) => {
    return await Product.findById(id)
      .populate("userId", "name email")
      .populate("categoryId", "name");
  },

  // Get products for specific user
  getProductsByUser: async (userId: string) => {
    return await Product.find({
      userId: new mongoose.Types.ObjectId(userId),
    })
      .populate("userId", "name email")
      .populate("categoryId", "name");
  },

  // Update product
  updateProduct: async (id: string, data: any) => {
    data.topSeller = true; // force TRUE again
    return await Product.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })
      .populate("userId", "name email")
      .populate("categoryId", "name");
  },

  // Delete product
  deleteProduct: async (id: string) => {
    return await Product.findByIdAndDelete(id);
  },
};
