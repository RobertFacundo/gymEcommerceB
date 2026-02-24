import stripe from "../../../config/stripe";
import { CartModel } from "../../cart/models/cart.model";
import { User } from "../../auth/model/user.model";

interface CreateCheckoutSessionParams {
    userId?: string;
    guestId?: string;
    successUrl: string;
    cancelUrl: string;
}

export const createCheckoutSession = async (params: CreateCheckoutSessionParams) => {

    const { userId, guestId, successUrl, cancelUrl } = params;
    console.log('CHECKOUT PARAMS:', params);

    const orConditions: any[] = [];

    if (userId) orConditions.push({ userId });
    if (guestId) orConditions.push({ guestId });

    if (!userId && !guestId) {
        throw new Error('No user or guest provided');
    }

    const cart = await CartModel.findOne({
        $or: orConditions,
        isActive: true,
    });

    if (!cart || cart.items.length === 0) {
        throw new Error('Empty cart')
    }

    let user = null;
    let discount = 0;
    if (userId) {
        user = await User.findById(userId);
        if (user?.isMember) {
            discount = 0.3;
        }
    }

    const line_items = cart.items.map((item) => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name.en,
                images: [item.image],
            },
            unit_amount: Math.round(item.price * 100 * (1 - discount)),
        },
        quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl,
        metadata: {
            userId: userId || '',
            guestId: guestId || '',
            discountApplied: discount.toString(),
        },
    });

    return session;
};

export const getCheckoutSession = async (sessionId: string) => {
    const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items'] });
    return session;
}