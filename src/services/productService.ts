import Product from "../models/productModel"; // Import Product model (database structure)
import mongoose from "mongoose"; // Import mongoose for ObjectId handling

export default {
  // CREATE PRODUCT
  createProduct: async (data: any) => {
    data.topSeller = true; // បង្ខំ topSeller តែងតែ true
    const product = new Product(data); // បង្កើត object product ថ្មី
    return await product.save(); // save ទៅ database
  },

  // GET ALL PRODUCTS
  getAllProducts: async () => {
    return await Product.find() // ទាញរាល់ product
      .populate("userId", "name email") // join info ពី user collection (name, email)
      .populate("categoryId", "name"); // join info ពី category collection (name)
  },

  // GET PRODUCT BY ID
  getProductById: async (id: string) => {
    return await Product.findById(id) // ទាញ product តាម id
      .populate("userId", "name email") // join user info
      .populate("categoryId", "name"); // join category info
  },

  // GET PRODUCTS BY USER
  getProductsByUser: async (userId: string) => {
    return await Product.find({
      userId: new mongoose.Types.ObjectId(userId), // filter by userId
    })
      .populate("userId", "name email") // join user info
      .populate("categoryId", "name"); // join category info
  },

  // UPDATE PRODUCT
  updateProduct: async (id: string, data: any) => {
    data.topSeller = true; // force topSeller true
    return await Product.findByIdAndUpdate(id, data, {
      new: true, // return updated object
      runValidators: true, // validate data according to schema
    })
      .populate("userId", "name email") // join user info
      .populate("categoryId", "name"); // join category info
  },

  // DELETE PRODUCT
  deleteProduct: async (id: string) => {
    return await Product.findByIdAndDelete(id); // delete product by id
  },
};
