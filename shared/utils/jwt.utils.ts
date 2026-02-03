import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { IUser } from '../../modules/auth/model/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

interface JwtPayload {
    id: Types.ObjectId;
    isMember: boolean;
}

export const generateToken = (user: IUser & { _id: Types.ObjectId }) => {
    const payload: JwtPayload = {
        id: user._id,
        isMember: user.isMember
    }

    return jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '7d' }
    );
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};