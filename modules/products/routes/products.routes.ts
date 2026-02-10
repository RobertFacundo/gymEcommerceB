import { Router } from "express";
import { getCategoriesController, getProductsByCategoryController, getProductsController } from "../controllers/products.controller";


const router = Router();

router.get('/categories', getCategoriesController);
router.get('/', getProductsController);
router.get('/:categoryName', getProductsByCategoryController);

export default router;