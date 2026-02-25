import { Router } from 'express';
import { membershipWebhookController } from '../controller/membership.webhook.controller';

const router = Router();

// webhook de stripe
router.post('/', membershipWebhookController);

export default router;