import { Request, Response } from 'express';
import { CartService } from '../services/cart.service';
import { Types } from 'mongoose';
import { getCartIdentifier } from '../utils/cartIdentifier';

interface AuthRequest extends Request {
    user?: any;
}

export class CartController {
    static async getCart(req: AuthRequest, res: Response) {
        try {
            const identifier = await getCartIdentifier(req);

            const cart = await CartService.getOrCreateCart(identifier);

            res.json(cart);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }
    static async addProduct(req: AuthRequest, res: Response) {
        try {
            const { productId, name, image, price, quantity } = req.body;

            if (!productId || !name || !image || !price || !quantity) {
                return res.status(400).json({ message: 'Missing product data' });
            }

            const identifier = await getCartIdentifier(req);

            const product = {
                productId: new Types.ObjectId(productId),
                name,
                image,
                price,
                quantity
            };

            const cart = await CartService.addProductToCart(identifier, product);
            res.json(cart);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    static async removeProduct(req: AuthRequest, res: Response) {
        try {
            const productId = req.params.productId as string;

            if (!Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ message: 'Invalid productId' });
            }

            const identifier = await getCartIdentifier(req);

            console.log(identifier, 'log del remove product controler')

            const cart = await CartService.removeProductFromCart(identifier, new Types.ObjectId(productId));
            console.log(cart, 'log del removeproduct contorller')
            res.json(cart);
        } catch (err: any) {
            return res.status(400).json({ message: err.message });
        }
    }

    static async clearCart(req: AuthRequest, res: Response) {
        try {
            const identifier = await getCartIdentifier(req);

            const cart = await CartService.clearCart(identifier);
            res.json(cart);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    static async mergeCart(req: AuthRequest, res: Response) {
        try {
            if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

            const guestId = req.body.guestId;
            if (!guestId) return res.status(400).json({ message: 'guestId required' });

            const cart = await CartService.mergeCarts(guestId, req.user._id);
            res.json(cart);
        } catch (err: any) {
            res.status(500).json({ message: err.message })
        }
    }
}