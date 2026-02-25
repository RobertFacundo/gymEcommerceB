import { Request, Response } from 'express';
import stripe from '../../../config/stripe';
import { User } from '../../auth/model/user.model';

export const membershipWebhookController = async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature']!;
    const endpointSecret = process.env.STRIPE_MEMBERSHIP_WEBHOOK_SECRET;

    let event;

    try {
        if (!endpointSecret) throw new Error('webhook secret is not set in .env');
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
        return res.status(400).send(`webhooks error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as any;
        const userId = session.metadata.userId;

        if (userId) {
            const user = await User.findById(userId);
            if (user) {
                user.isMember = true;

                await user.save();
            }
        }
    }

    res.json({ received: true })
}