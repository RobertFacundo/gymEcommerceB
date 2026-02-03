import { Schema, model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IShoppingItem {
    productId: Types.ObjectId;
    name: string;
    price: number;
    quantity: number;
}

export interface IShoppingHistoryItem {
    orderId: string;
    items: IShoppingItem[];
    total: number;
    purchasedAt: Date;
}

const ShoppingItemSchema = new Schema<IShoppingItem>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
    },
    { _id: false }
)

const ShoppingHistoryItemSchema = new Schema<IShoppingHistoryItem>(
    {
        orderId: {
            type: String,
            required: true
        },
        items: {
            type: [ShoppingItemSchema],
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        purchasedAt: {
            type: Date,
            default: Date.now
        }
    },
    { _id: false }
)

export interface IUser {
    name: string;
    email: string;
    password: string;
    isMember: boolean;
    shoppingHistory: IShoppingHistoryItem[];
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        isMember: {
            type: Boolean,
            default: false
        },
        shoppingHistory: {
            type: [ShoppingHistoryItemSchema],
            default: []
        }
    },
    { timestamps: true }
);

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
    candidatePassword: string
) {
    return bcrypt.compare(candidatePassword, this.password);
};

export const User = model<IUser>('User', UserSchema);