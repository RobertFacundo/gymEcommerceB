import { Schema, model } from 'mongoose';

const TranslatedTextSchema = new Schema(
    {
        en: { type: String, required: true },
        es: { type: String, required: true }
    },
    { _id: false }
);

const ProductSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: String,
            required: true
        },
        name: {
            type: TranslatedTextSchema,
            required: true
        },
        description: {
            type: TranslatedTextSchema,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        brand: {
            type: String
        },
        featured: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export const ProductModel = model('product', ProductSchema);