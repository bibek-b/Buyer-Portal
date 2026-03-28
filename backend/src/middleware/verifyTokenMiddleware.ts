import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { env } from "../config/env.js";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;

    if(!token) {
        return res.status(401).json({success:false, message: "Access denied. No token provided"});
    }

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
        (req as any).user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({success: false, message: "Invalid or expired token"})
    }
}