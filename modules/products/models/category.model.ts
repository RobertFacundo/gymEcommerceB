import { Schema, model } from 'mongoose';

const TranslatedTextSchema = new Schema(
    {
        en: { type: String, required: true },
        es: { type: String, required: true }
    },
    { _id: false }
);

const CategorySchema = new Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: TranslatedTextSchema,
            required: true
        },
        description: {
            type: TranslatedTextSchema,
            required: true
        }
    },
    { timestamps: true }
);

export const CategoryModel = model('category', CategorySchema);