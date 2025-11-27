// models/cartItemModel.ts
import { Schema, model } from "mongoose";
import { ICartItem } from "../types/cartType";

const cartItemSchema = new Schema<ICartItem>(
  {
    cartId: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<ICartItem>("CartItem", cartItemSchema);
