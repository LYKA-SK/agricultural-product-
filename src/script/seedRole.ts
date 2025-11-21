import mongoose from "mongoose";
import Role from "../models/roleModel";
import dotenv from "dotenv";

dotenv.config();

const seedRoles = async () => {
  const dbUri = process.env.MONGODB_URI;
  if (!dbUri) {
    console.error("MONGODB_URI is not defined in environment variables.");
  }
  await mongoose.connect(dbUri!);

  const roles = [
    { name: "admin", description: "Administrator with full access" },
    { name: "cuntomer", description: "Customer with limited access" },
    { name: "famrer", description: "Farmer with access to farm management" },
  ];
  for (const roleData of roles) {
    const existingRole = await Role.findOne({ name: roleData.name });
    if (!existingRole) {
      const role = new Role(roleData);
      await role.save();
      console.log(`Role ${roleData.name} created.`);
    } else {
      console.log(`Role ${roleData.name} already exists.`);
    }
  }
};

seedRoles();
