import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import ApiResponse from '../../../utils/api-utils/api-response'

interface AuthRequest extends Request {
    user?: any;
}

const handleAdminAuth = (req:AuthRequest , res:Response , next:NextFunction)=>{
    try {
        const accessToken = req.headers?.authorization?.split("Bearer ")[1] || req.cookies.accessToken;
        if (!accessToken) {
            return ApiResponse.failure([], "Access token is required", 401).send(res);
        }
        const verifyToken = jwt.verify(accessToken, process.env.ADMIN_JWT_SECRECT_KEY as string);
        if (!verifyToken) {
            return ApiResponse.failure([], "Invalid access token", 401).send(res);
        }
        req.user = (verifyToken as any)._id
        next();
    } catch (error) {
        console.log(error);
        return ApiResponse.failure([], "An error occurred during authentication", 500).send(res);
    }
}

export default handleAdminAuth;