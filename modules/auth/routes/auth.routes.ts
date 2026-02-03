import { Router } from "express";
import { register, login, getMe } from '../controller/auth.controller';
import { authMiddleware } from "../../../shared/middlewares/auth.middleware";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);

export default router;