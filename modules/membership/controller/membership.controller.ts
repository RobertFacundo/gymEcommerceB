import { Request, Response } from 'express';
import { createMembershipSession } from '../services/membership.service';

export const createMembershipController = async (req: Request, res: Response) => {
    try {
        const { userId, successUrl, cancelUrl, priceId } = req.body;
        const session = await createMembershipSession({ userId, successUrl, cancelUrl, priceId });
        res.json(session);
    } catch (err: any) {
        res.status(400).json({ error: err.message })
    }
}