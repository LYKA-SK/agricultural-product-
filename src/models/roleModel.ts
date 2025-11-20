import { Schema, model } from "mongoose";

import { IRole } from "../types/roleType";
const roleSchema = new Schema<IRole>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IRole>("Role", roleSchema);
