import { Schema, model, Types } from 'mongoose';

const TranslatedTextSchema = new Schema(
    {
        en: { type: String, required: true },
        es: { type: String, required: true }
    },
    { _id: false }
);

export interface ICartItem {
    productId: Types.ObjectId;
    name: { en: string; es: string };
    image: string;
    price: number;
    quantity: number;
}

const CartItemSchema = new Schema<ICartItem>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: {
            type: TranslatedTextSchema,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        }
    },
    { _id: false }
);

export interface ICart {
    userId?: Types.ObjectId;
    guestId?: string;
    items: ICartItem[];
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const CartSchema = new Schema<ICart>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        guestId: {
            type: String,
            required: false
        },
        items: {
            type: [CartItemSchema],
            default: []
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

CartSchema.index({ userId: 1, isActive: 1 });
CartSchema.index({ guestId: 1, isActive: 1 });

export const CartModel = model<ICart>('Cart', CartSchema);