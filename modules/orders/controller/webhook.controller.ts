import { Request, Response } from 'express';
import stripe from '../../../config/stripe';
import { CartModel } from '../../cart/models/cart.model';
import { User } from '../../auth/model/user.model';

export const stripeWebhookController = async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature']!;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        if (!endpointSecret) throw new Error('Webhook secret is not set in .env');
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as any;
        const userId = session.metadata.userId;
        const guestId = session.metadata.guestId;

        const orConditions: any[] = [];

        if (userId) orConditions.push({ userId });
        if (guestId) orConditions.push({ guestId });

        if (orConditions.length === 0) {
            console.warn('Webhook without userId and guestId');
            return res.json({ received: true });
        }

        await CartModel.findOneAndUpdate(
            {
                $or: orConditions,
                isActive: true,
            },
            { isActive: false }
        );

        if (userId) {
            const user = await User.findById(userId);
            if (user) {
                const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
                    session.id,
                    { expand: ['line_items.data.price.product'] }
                );

                console.log(sessionWithLineItems, 'log del session webhook controller!')

                const items = sessionWithLineItems.line_items?.data.map((i: any) => {

                    const product = i.price.product
                    const productId = typeof product !== 'string' ? product.metadata.productId : null;

                    return {
                        productId: productId,
                        name: i.description,
                        price: i.amount_total / 100,
                        quantity: i.quantity,
                    }
                }) || [];

                const total = items.reduce((sum, item) => sum + item.price, 0);

                user.shoppingHistory.push({
                    orderId: session.id,
                    items,
                    total,
                    purchasedAt: new Date(),
                });

                console.log(JSON.stringify(user.shoppingHistory, null, 2),'log user final');

                await user.save();
            }
        }
    }

    res.json({ received: true })
}