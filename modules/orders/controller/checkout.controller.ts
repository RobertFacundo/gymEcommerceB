import { Request, Response } from 'express';
import { createCheckoutSession, getCheckoutSession } from '../services/checkout.service';
import { AuthRequest } from '../../../shared/middlewares/auth.middleware';
import { getCartIdentifier } from '../../cart/utils/cartIdentifier';

interface SessionParams {
    sessionId: string;
}

export const createSessionController = async (req: AuthRequest & { guestId?: string }, res: Response) => {
    try {
        console.log('1111BODY:', req.body);
        console.log('11111USER:', req.user);

        const { successUrl, cancelUrl } = req.body;

        const identifier = getCartIdentifier(req);

        const session = await createCheckoutSession({
            ...identifier,
            successUrl,
            cancelUrl,
        });

        res.json({ url: session.url })
    } catch (error: any) {
        console.error('CHECKOUT ERROR:', error.message);
        res.status(400).json({ error: error.message });
    }
};

export const getSessionController = async (req: Request<SessionParams>, res: Response) => {
    try {
        const { sessionId } = req.params;
        if (!sessionId) throw new Error('Session id is required');

        const session = await getCheckoutSession(sessionId);
        res.json(session);
    } catch (error: any) {
        res.status(400).json({ error: error.message })
    }
}