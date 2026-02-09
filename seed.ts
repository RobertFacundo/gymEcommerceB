import mongoose from "mongoose";
import dotenv from 'dotenv';

import { CategoryModel } from "./modules/products/models/category.model";
import { ProductModel } from "./modules/products/models/product.mdel";

import { categories } from "./shared/data/categories";
import { products } from "./shared/data";

dotenv.config();

const seedDataBase = async () => {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("MONGO_URI is not defined");
        }

        await mongoose.connect(uri);
        console.log("mongoDB connected");

        await CategoryModel.deleteMany();
        await ProductModel.deleteMany();

        console.log('Existing data removed');

        await CategoryModel.insertMany(categories);
        await ProductModel.insertMany(products);

        console.log('Data base seeded successfully')

        process.exit(0);
    } catch (error) {
        console.error('seed error:', error);
        process.exit(1);
    }
};

seedDataBase();