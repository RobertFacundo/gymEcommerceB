import { CartModel } from "../models/cart.model";
import { Request } from "express";
import { Types } from "mongoose";

interface AuthRequest extends Request {
  user?: any;
}

export const getCartIdentifier = async (req: AuthRequest): Promise<{ userId?: Types.ObjectId; guestId?: string }> => {
  if (req.user?.id) {
    return { userId: new Types.ObjectId(req.user.id) };
  }

  const guestId = req.headers["x-guest-id"];

  if (!guestId || typeof guestId !== "string") {
    throw new Error("No cart identifier");
  }

  return { guestId };
};