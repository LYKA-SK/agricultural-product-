//userRoleModel.create
//roleModel.findOne
//userModel.create

import mogoose from "mongoose";
import roleModel from "../models/roleModel";
import userModel from "../models/userModel";
import userRoleModel from "../models/userRoleModel";
import dotenv from "dotenv";

dotenv.config();
const seedAdmin = async () => {
  const dbUri = process.env.MONGODB_URI;
  if (!dbUri) {
    console.error("MONGODB_URI is not defined in environment variables.");
  }
  await mogoose.connect(dbUri!);

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminAddress =
    process.env.ADMIN_ADDRESS || "123 Admin St, City, Country";
  const adminName = process.env.ADMIN_NAME || "Admin";
  const adminPhone = process.env.ADMIN_PHONE || "0000000000";
  const adminRole = await roleModel.findOne({ name: "admin" });
  if (!adminRole) {
    console.error("Admin role not found. Please seed roles first.");
  }

  //validate if admin user already exists
  if (!adminEmail) {
    console.error("ADMIN_EMAIL is not defined in environment variables.");
  }
  if (!adminAddress) {
    console.error("ADMIN_ADDRESS is not defined in environment variables.");
  }
  if (!adminPassword) {
    console.error("ADMIN_PASSWORD is not defined in environment variables.");
  }
  if (!adminRole) {
    console.error("Admin role not found. Please seed roles first.");
  }
  if (!adminPhone) {
    console.error("ADMIN_PHONE is not defined in environment variables.");
  }

  if (!adminName) {
    console.error("ADMIN_LAST_NAME is not defined in environment variables.");
  }

  const existingAdmin = await userModel.findOne({ email: adminEmail });
  if (existingAdmin) {
    console.log("Admin user already exists.");
  }
  const newAdmin = new userModel({
    Name: adminName,
    address: adminAddress,
    email: adminEmail,
    password: adminPassword,
    phone: adminPhone,
  });
  await newAdmin.save();
  const newUserRole = new userRoleModel({
    user_id: newAdmin._id,
    role_id: adminRole!._id,
  });
  await newUserRole.save();
  console.log("Admin user created successfully.");
};

seedAdmin();
