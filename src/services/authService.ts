// src/services/authService.ts
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// Generate Access Token
const generateAccessToken = (user: any) => {
  return jwt.sign({ id: user._id, roles: user.roles }, JWT_SECRET, {
    expiresIn: "15m",
  });
};

// Generate Refresh Token
const generateRefreshToken = (user: any) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
};

export const registerService = async (req: Request, res: Response) => {
  try {
    const { name, phone, address, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ Message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      phone,
      address,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ Message: "User created successfully", user: newUser });
  } catch {
    return res.status(500).json({ Message: "internal server error" });
  }
};
export const loginService = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ Message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ Message: "Invalid email or password" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return res.status(200).json({
      Message: "Login successful",
      data: user,
      accessToken,
      refreshToken,
    });
  } catch {
    return res.status(500).json({ Message: "internal server error" });
  }
};

// LOGOUT
// export const logoutService = async (req: Request, res: Response) => {
//   try {
//     res.clrearCookie("refreshToken", {
//       httpOnly: true,
//       secure: true,
//       sameSite: "strict",
//     });
//     return res.status(200).json({ Message: "Logout successful" });
//   }
// }
