import { Request, Response } from 'express';
import * as productService from '../services/products.service';

interface CategoryParams {
    categoryName: string;
}

export const getProductsController = async (req: Request, res: Response) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
};

export const getProductsByCategoryController = async (
    req: Request<CategoryParams>,
    res: Response
) => {
    try {
        const categoryName = req.params.categoryName as string;

        if (!categoryName) {
            return res.status(400).json({ message: 'Category is Required' });
        }

        const products = await productService.getProductsByCategory(categoryName);

        res.status(200).json(products);
    } catch {
        res.status(500).json({ message: 'internal server error' })
    }
};