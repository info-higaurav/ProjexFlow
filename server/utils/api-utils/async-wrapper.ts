import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"
import ApiResponse from "./api-response"

export default function asyncWrapper(fn:Function) {
    return async (req:Request, res:Response , next:NextFunction)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            console.log(error)
            if(error instanceof ZodError){
                console.log(JSON.stringify(error))
                const data = error.issues.map((issue)=> issue.message)
                return ApiResponse.failure(data, "Validation failed",400).send(res)
            }
            console.log(error)
        }
    }
    
}