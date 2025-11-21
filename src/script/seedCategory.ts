import mongoose from "mongoose";
import Category from "../models/categoryModel";
import dotenv from "dotenv";

dotenv.config();

const seedCategories = async () => {
  const dbUri = process.env.MONGODB_URI;
  if (!dbUri) {
    console.error("MONGODB_URI is not defined in environment variables.");
  }
  await mongoose.connect(dbUri!);

  const categories = [
    { name: "lyka", description: "Lyka category description" },
    { description: "Adidas category description", name: "adidas" },
  ];
  for (const categoryData of categories) {
    const existingCategory = await Category.findOne({
      name: categoryData.name,
    });
    if (!existingCategory) {
      const category = new Category(categoryData);
      await category.save();
      console.log(`Category ${categoryData.name} created.`);
    } else {
      console.log(`Category ${categoryData.name} already exists.`);
    }
  }
};
seedCategories();
