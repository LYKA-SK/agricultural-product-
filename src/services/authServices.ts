// src/services/authService.ts
import User from "../models/authModles";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// Generate Access + Refresh tokens
const generateAccessToken = (user: any) => {
  return jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (user: any) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER USER
export const registerUser = async (data: any) => {
  const { name, phone, address, email, password, roles } = data;

  const existUser = await User.findOne({ email });
  if (existUser) throw new Error("Email already exists");

  const newUser = await User.create({
    name,
    phone,
    address,
    email,
    password,
    roles,
  });

  const accessToken = generateAccessToken(newUser);
  const refreshToken = generateRefreshToken(newUser);

  return {
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      roles: newUser.roles,
    },
    accessToken,
    refreshToken,
  };
};

// LOGIN USER
export const loginUser = async (data: any) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid email or password");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      roles: user.roles,
    },
    accessToken,
    refreshToken,
  };
};
// LOGOUT USER
export const logoutUser = async () => {
  return { message: "Logout successful" };
};
