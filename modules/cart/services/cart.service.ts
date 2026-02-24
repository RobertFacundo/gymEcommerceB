import { Types, HydratedDocument } from 'mongoose';
import { CartModel, ICart, ICartItem } from '../models/cart.model';

type ICartDoc = HydratedDocument<ICart>

interface CartIdentifier {
    userId?: Types.ObjectId;
    guestId?: string;
}

export class CartService {
    private static buildQuery(identifier: CartIdentifier) {
        if (identifier.userId) return { userId: identifier.userId, isActive: true };
        if (identifier.guestId) return { guestId: identifier.guestId, isActive: true };
        throw new Error('userId or guestId must be provided');
    }

    static async getOrCreateCart(identifier: CartIdentifier): Promise<ICartDoc> {
        const query = this.buildQuery(identifier);

        let cart = await CartModel.findOne(query);
        if (!cart) {
            cart = await CartModel.create({
                ...identifier,
                items: [],
                isActive: true
            });
        }

        return cart;
    }

    static async getCart(identifier: CartIdentifier): Promise<ICartDoc | null> {
        const query = this.buildQuery(identifier);
        return CartModel.findOne(query);
    }

    static async addProductToCart(
        identifier: CartIdentifier,
        product: ICartItem
    ): Promise<ICartDoc> {
        const cart = await this.getOrCreateCart(identifier);

        const existingItem = cart.items.find(item => item.productId.equals(product.productId));
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.items.push(product);
        }

        await cart.save()
        return cart;
    }

    static async removeProductFromCart(
        identifier: CartIdentifier,
        productId: Types.ObjectId
    ): Promise<ICartDoc | null> {
        const cart = await this.getCart(identifier);

        console.log(cart,'log del removeproduct service')
        if (!cart) return null;

        cart.items = cart.items.filter(item => item.productId.toString() !== productId.toString());

        await cart.save();
        return cart;
    }

    static async clearCart(identifier: CartIdentifier): Promise<ICartDoc | null> {
        const cart = await this.getCart(identifier);
        if (!cart) return null;

        cart.items = [];

        await cart.save();
        return cart;
    }

    static async mergeCarts(
        guestId: string,
        userId: Types.ObjectId
    ): Promise<ICartDoc> {
        const guestCart = await CartModel.findOne({ guestId, isActive: true });
        let userCart = await CartModel.findOne({ userId, isActive: true });

        if (!guestCart && userCart) return userCart;
        if (!guestCart && !userCart) {
            return CartModel.create({ userId, items: [], isActive: true });
        }

        if (!userCart) {
            guestCart!.userId = userId;
            guestCart!.guestId = undefined;
            await guestCart!.save();
            return guestCart!;
        }

        guestCart!.items.forEach(gItem => {
            const uItem = userCart!.items.find(i => i.productId.toString() === gItem.productId.toString());
            if (uItem) uItem.quantity += gItem.quantity;
            else userCart!.items.push(gItem);
        });

        await userCart!.save();
        guestCart!.isActive = false;
        await guestCart!.save();

        return userCart!;
    }
}