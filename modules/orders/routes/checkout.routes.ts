import { Router } from "express";
import { createSessionController, getSessionController } from "../controller/checkout.controller";
import { authMiddlewareOptional } from "../../../shared/middlewares/auth.middleware";

const router = Router();

router.post('/create-session', authMiddlewareOptional, createSessionController);

router.get('/session/:sessionId', getSessionController);

export default router;