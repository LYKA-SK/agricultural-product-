// types/cartType.ts
import { Document, ObjectId } from "mongoose";

export interface ICart extends Document {
  userId: ObjectId;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICartItem extends Document {
  cartId: ObjectId;
  productId: ObjectId;
  quantity: number;
  price: number;
}
