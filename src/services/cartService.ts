// services/cartService.ts
import Cart from "../models/cartModel";
import CartItem from "../models/cartItemModel";
import { Request, Response } from "express";
import mongoose from "mongoose";

// Create Cart
export const createCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const cart = new Cart({ userId });
    await cart.save();
    res.status(201).json({ message: "Cart created", cart });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get Cart by User
export const getCartByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId }).populate({
      path: "userId",
      select: "name email",
    });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    const items = await CartItem.find({ cartId: cart._id }).populate(
      "productId"
    );
    res.status(200).json({ cart, items });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Add Item to Cart
export const addItemToCart = async (req: Request, res: Response) => {
  try {
    const { cartId, productId, quantity, price } = req.body;
    const item = new CartItem({ cartId, productId, quantity, price });
    await item.save();

    // Update cart totalPrice
    const cart = await Cart.findById(cartId);
    if (cart) {
      cart.totalPrice += price * quantity;
      await cart.save();
    }

    res.status(201).json({ message: "Item added", item });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update Item Quantity
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const item = await CartItem.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    // Update total price
    const cart = await Cart.findById(item.cartId);
    if (cart) {
      cart.totalPrice =
        cart.totalPrice - item.price * item.quantity + item.price * quantity;
      await cart.save();
    }

    item.quantity = quantity;
    await item.save();

    res.status(200).json({ message: "Item updated", item });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Item
export const deleteCartItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await CartItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    // Update cart totalPrice
    const cart = await Cart.findById(item.cartId);
    if (cart) {
      cart.totalPrice -= item.price * item.quantity;
      await cart.save();
    }

    res.status(200).json({ message: "Item removed", item });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
