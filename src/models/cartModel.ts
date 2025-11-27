// models/cartModel.ts
import { Schema, model } from "mongoose";
import { ICart } from "../types/cartType";

const cartSchema = new Schema<ICart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model<ICart>("Cart", cartSchema);
