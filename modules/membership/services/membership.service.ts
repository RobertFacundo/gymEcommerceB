import stripe from "../../../config/stripe";
import { User } from "../../auth/model/user.model";

interface CreateMembershipSessionParams {
    userId: string;
    successUrl: string;
    cancelUrl: string;
    priceId: string;
}

export const createMembershipSession = async (params: CreateMembershipSessionParams) => {
    const { userId, successUrl, cancelUrl, priceId } = params;

    const user = await User.findById(userId);
    if (!user) throw new Error('user not found');

    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        customer_email: user.email,
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl,
        metadata: {
            userId
        }
    });

    return session;
}