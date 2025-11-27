import { Request, Response } from "express";
import * as userService from "../services/userService";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUsersController = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({ users });
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).json({ user });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
