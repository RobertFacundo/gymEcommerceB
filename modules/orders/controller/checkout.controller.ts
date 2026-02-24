import { Request, Response } from 'express';
import { createCheckoutSession, getCheckoutSession } from '../services/checkout.service';
import { AuthRequest } from '../../../shared/middlewares/auth.middleware';

interface SessionParams{
    sessionId:string;
}

export const createSessionController = async (req: AuthRequest, res: Response) => {
    try {
        const { successUrl, cancelUrl } = req.body;
        const userId = req.user?.id;
        const guestId = req.body.guestId;

        const session = await createCheckoutSession({ userId, guestId, successUrl, cancelUrl });

        res.json({ url: session.url })
    } catch (error: any) {
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