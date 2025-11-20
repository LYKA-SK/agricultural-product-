import { Request, Response } from "express";
import { createRole as createRoleService } from "../services/roleService";

export const createRole = async (req: Request, res: Response) => {
  const result = await createRoleService(req, res);
  return result;
};
