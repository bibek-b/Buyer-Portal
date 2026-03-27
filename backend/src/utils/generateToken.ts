import type mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { env } from "../config/env.js";

export const generateToken = (userId: mongoose.Types.ObjectId) => {
    const accessToken = jwt.sign(
        {id: userId},
        env.JWT_SECRET,
        {expiresIn: '7d'}
    );

    return { accessToken }
}