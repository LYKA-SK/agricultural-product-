import { Document } from "mongoose";
export interface IProduct extends Document {
  name: string;
  price: number;
  stock: number;
  description: string;
  userId: object;
  categoryId: object;
  topSeller: boolean;
  createdAt: Date;
  updatedAt: Date;
}
