import { Request,  NextFunction, Response } from "express";
import ApiResponse from "../../utils/api-utils/api-response";
import { User } from "../../schema/users-schema";
import UserServices from "../../services/user-services";

export const routeHealth =async (req:Request, res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Routes are healthy",200).send(res);
}

export const handlleSignUp =async (req:Request, res:Response , next:NextFunction)=>{
    const payload = req.body;
    const userServices = new UserServices();

    const validatedPayload = await userServices.verifySignUpPayload(payload);
    const isUserExists = await userServices.checkUser(validatedPayload?.auth?.email)

    if(isUserExists.length !== 0){
        return ApiResponse.failure([],"User already exists", 400).send(res);
    }
    const hashPassword = await userServices.hashPassword(validatedPayload?.auth?.password)
    const userPayload = {...validatedPayload , "auth.password":hashPassword}
    const user = await userServices.addUser(userPayload);

    const userId = user?._id
    const accessToekn = await userServices.generateAccessToken(userId as string)
    const refreshToken = await userServices.generateRefreshToken(userId as string)

    res.cookie("accessToken", accessToekn ,{
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //1d
        sameSite: "none",
        domain: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_HOST : process.env.LOCALHOST
    })
    res.cookie("refreshToken", refreshToken ,{
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30d
        sameSite: "none",
        domain: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_HOST : process.env.LOCALHOST
    })

    res.set({
        "Authorization":`Bearer ${accessToekn}`,
        "x-refresh-token":refreshToken
    })

    return ApiResponse.success([user],"User created successfully",201).send(res);
}

export const handleSignIn = async(req:Request, res:Response, next:NextFunction)=>{
    const payload = req.body;
    const userServices = new UserServices();
    
    const verifyPayload = await userServices.verifySignInPayload(payload);
    const {email, password}= verifyPayload;
    const user = await userServices.checkUser(email)

    if(user.length === 0){
        return ApiResponse.failure([],"User doesn't exist", 400).send(res);
    }
    const hashPass = user[0]?.auth.password;
    const isValidPassword = await userServices.verifyHashPassword(password, hashPass);
    if(!isValidPassword){
        return ApiResponse.failure([],"Invalid password", 400).send(res);
    }
    const userId = user[0]?._id;
    const accessToekn = await userServices.generateAccessToken(userId as string)
    const refreshToken = await userServices.generateRefreshToken(userId as string)

    res.cookie("accessToken", accessToekn ,{
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //1d
        sameSite: "none",
        domain: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_HOST : process.env.LOCALHOST
    })
    res.cookie("refreshToken", refreshToken ,{
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), //30d
        sameSite: "none",
        domain: process.env.NODE_ENV === "production" ? process.env.PRODUCTION_HOST : process.env.LOCALHOST
    })

    res.set({
        "Authorization":`Bearer ${accessToekn}`,
        "x-refresh-token":refreshToken
    })
    
    return ApiResponse.success([],"login successfully",200).send(res);

    
}


