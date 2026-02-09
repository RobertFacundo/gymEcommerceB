import { Router } from "express";
import { getProductsByCategoryController, getProductsController } from "../controllers/products.controller";

const router = Router();

router.get('/', getProductsController);
router.get('/:categoryName', getProductsByCategoryController);

export default router;