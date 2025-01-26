import { NextFunction, Request, Response } from "express";
import TaskServices from "../../services/task-services";
import UserServices from "../../services/user-services";
import ApiResponse from "../../utils/api-utils/api-response";

export const handleCreateTask = async(req:Request, res:Response, next:NextFunction)=>{
    const payload = req.body;
    const userId =  (req as any).user

    const taskService = new TaskServices();
    const userService = new UserServices();

    const result = await taskService.taskPayloadValidation({...payload, assignor:userId})
    const user = await userService.getUser(userId);
    if(user?.auth?.role !== "manager"){
        return ApiResponse.failure([], "You are not authorized to create a task",401).send(res);
    }
    const task = await taskService.createTask(result);
    return ApiResponse.success([task], "Task has been created successfully",201).send(res);
   
    
}