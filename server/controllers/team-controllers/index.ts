import { NextFunction, Request, Response } from "express";
import TeamService from "../../services/team-services";
import ApiResponse from "../../utils/api-utils/api-response";
import UserServices from "../../services/user-services";

export const handleCreateTeam = async(req:Request, res:Response, next:NextFunction)=>{
    const payload = req.body
    const userId = (req as any).user
    const userService = new UserServices()
    const user = await userService.getUser(userId)
    if(!user){
        return ApiResponse.failure([], "User not found", 404).send(res)
    }
    if(user.auth.role !== "manager"){
        return ApiResponse.failure([], "You are not authorized to create a team", 403).send(res)
    }
    const teamService = new TeamService()
    const result = await teamService.validateTeam(payload)
    const team = await teamService.createTeam({...result, managedBy:userId})
    return ApiResponse.success(team, "Team created successfully", 201).send(res)
}