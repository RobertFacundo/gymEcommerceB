import { Router } from "express";
import { CartController } from "../controller/cart.controller";
import { authMiddleware, authMiddlewareOptional } from "../../../shared/middlewares/auth.middleware";

const router = Router();

router.get('/', authMiddlewareOptional, CartController.getCart);
router.post('/product', authMiddlewareOptional, CartController.addProduct);
router.delete('/product/:productId',authMiddlewareOptional, CartController.removeProduct);
router.delete('/',authMiddlewareOptional, CartController.clearCart);
router.post('/merge', authMiddleware, CartController.mergeCart);

export default router;