import { Router } from 'express';
import { createMembershipController } from '../controller/membership.controller';

const router = Router();

router.post('/create', createMembershipController);


export default router;