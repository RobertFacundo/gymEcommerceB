import { Request, Response } from 'express';
import * as authService from '../services/auth.services';

interface AuthRequest extends Request {
    user?: any;
}

export const register = async (req: Request, res: Response) => {
    try {
        console.log('BODY:', req.body);

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const data = await authService.registerUser(name, email, password);

        res.status(201).json(data);
    } catch (err: any) {
        res.status(400).json({ message: err.message })
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const data = await authService.loginUser(email, password);

        res.status(200).json(data);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
};

export const getMe = async (req: AuthRequest, res: Response) => {
    res.status(200).json(req.user);
}