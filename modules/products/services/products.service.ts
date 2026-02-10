import { Product } from "../types/product.type";
import { Category } from "../types/category.type";
import { ProductModel } from "../models/product.mdel"
import { CategoryModel } from "../models/category.model";

export const getProducts = async (): Promise<Product[]> => {
    return await ProductModel.find();
}

export const getProductsByCategory = async (
    categoryName: string
): Promise<Product[]> => {
    return await ProductModel.find({ category: categoryName });
};

export const getCategories = async (): Promise<Category[]> => {
    return await CategoryModel.find();
}