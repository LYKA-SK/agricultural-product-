import User from "../models/userModel";
import bcrypt from "bcryptjs";

export const createUser = async (data: any) => {
  const { name, phone, address, email, password } = data;

  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    phone,
    address,
    email,
    password: hashedPassword,
  });

  return newUser;
};

export const getUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUser = async (id: string, data: any) => {
  const updated = await User.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error("User not found");
  return updated;
};

export const deleteUser = async (id: string) => {
  const deleted = await User.findByIdAndDelete(id);
  if (!deleted) throw new Error("User not found");
  return true;
};
