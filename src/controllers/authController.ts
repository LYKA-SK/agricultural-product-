import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authServices";
import { setAuthCookies, clearAuthCookies } from "../utils/cookie";

export const register = async (req: Request, res: Response) => {
  try {
    const { user, accessToken, refreshToken } = await registerUser(req.body);

    // Set cookies
    setAuthCookies(res, accessToken, refreshToken);

    res.json({ message: "Register successful", user });
  } catch (err) {
    res
      .status(400)
      .json({ message: err instanceof Error ? err.message : "Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { user, accessToken, refreshToken } = await loginUser(req.body);

    // Set cookies
    setAuthCookies(res, accessToken, refreshToken);

    res.json({ message: "Login successful", user });
  } catch (err) {
    res
      .status(400)
      .json({ message: err instanceof Error ? err.message : "Error" });
  }
};

export const logout = (req: Request, res: Response) => {
  clearAuthCookies(res);
  res.json({ message: "Logged out" });
};
