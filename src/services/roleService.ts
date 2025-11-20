import { Request, Response } from "express";
import Role from "../models/roleModel";

export const createRole = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ Message: "Role already exists" });
    }
    const newRole = await Role.create({ name, description });
    await newRole.save();
    return res
      .status(201)
      .json({ Message: "Role created successfully", data: newRole });
  } catch {
    return res.status(500).json({ Message: "internal server error" });
  }
};
