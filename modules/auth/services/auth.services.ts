import { User } from "../model/user.model";
import { generateToken } from "../../../shared/utils/jwt.utils";

export const registerUser = async (name: string, email: string, password: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists');

    const user = await User.create({ name, email, password });
    const token = generateToken(user);

    const safeUser = await User.findById(user._id).select('-password');

    return { user: safeUser, token };
};

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('invalid credentials');

    const token = generateToken(user);

    const safeUser = await User.findById(user._id).select('-password');

    return { user: safeUser, token }
}