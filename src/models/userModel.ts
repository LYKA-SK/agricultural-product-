import { Schema, model, Document, Types } from "mongoose";
import { IUser } from "../types/authType";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
