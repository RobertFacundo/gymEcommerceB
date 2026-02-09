import { Product } from "../types/product.type";
import { ProductModel } from "../models/product.mdel"

export const getProducts = async (): Promise<Product[]> => {
    return await ProductModel.find();
}

export const getProductsByCategory = async (
    categoryName: string
): Promise<Product[]> => {
    return await ProductModel.find({ category: categoryName });
};
