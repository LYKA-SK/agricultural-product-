import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../services/userService";

export const createUserController = async (req: Request, res: Response) => {
  const result = await createUser(req, res);
  return result;
};
export const getUserController = async (req: Request, res: Response) => {
  const result = await getUser(req, res);
  return result;
};
export const getUserByIdController = async (req: Request, res: Response) => {
  const result = await getUserById(req, res);
  return result;
};
export const updateUserController = async (req: Request, res: Response) => {
  const result = await updateUser(req, res);
  return result;
};
export const deleteUserController = async (req: Request, res: Response) => {
  const result = await deleteUser(req, res);
  return result;
};
