import { Request,  NextFunction, Response } from "express";
import ApiResponse from "../../utils/api-utils/api-response";
export const routeHealth =async (req:Request, res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Routes are healthy",200).send(res);
}