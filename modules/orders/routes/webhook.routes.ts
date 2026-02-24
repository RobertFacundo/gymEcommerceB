import { Router } from 'express';
import { stripeWebhookController } from '../controller/webhook.controller';

const router = Router();

router.post('/', stripeWebhookController);

export default router;