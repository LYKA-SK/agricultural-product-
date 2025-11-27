import { Request, Response } from "express";
import * as cartService from "../services/cartService";

// Controller functions just call service functions
export const createCartController = async (req: Request, res: Response) => {
  await cartService.createCart(req, res);
};

export const getCartByUserController = async (req: Request, res: Response) => {
  await cartService.getCartByUser(req, res);
};

export const addItemToCartController = async (req: Request, res: Response) => {
  await cartService.addItemToCart(req, res);
};

export const updateCartItemController = async (req: Request, res: Response) => {
  await cartService.updateCartItem(req, res);
};

export const deleteCartItemController = async (req: Request, res: Response) => {
  await cartService.deleteCartItem(req, res);
};
