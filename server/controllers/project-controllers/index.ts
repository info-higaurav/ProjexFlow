import { NextFunction, Request, Response } from "express";
import validateProject from "../../services/validation/project-validation";
import ProjectService from "../../services/project-services";
import ApiResponse from "../../utils/api-utils/api-response";

export const handleCreteProject = async(req:Request, res:Response, next:NextFunction)=>{
    const payload = req.body;
    const userId =  (req as any).user
    const result = validateProject.parse({...payload, createdBy:userId})
    const projectService = new ProjectService()
    const project = await projectService.createProject(result)
    return ApiResponse.success([project], "Project created successfully", 201).send(res)
}