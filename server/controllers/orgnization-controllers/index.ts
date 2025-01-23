import { NextFunction, Request, Response } from "express";
import OrganizationServices from "../../services/organization-services";
import UserServices from "../../services/user-services";
import ApiResponse from "../../utils/api-utils/api-response";

export const createOrgnization = async(req:Request , res:Response , next:NextFunction)=>{
    let payload = req.body || {}
    if(payload.subscription === ""){
        payload = {...payload , subscription:"6793df3595d4f22347796eca"}
    }
    const userId = (req as any).user

    const orgServices = new OrganizationServices();
    const userServices = new UserServices();

    const validateOrgPayload = await orgServices.validateOrgPayload(payload);

    const orgPayload = {...validateOrgPayload , createdBy:userId as string}

    const user = await userServices.getUser(userId)
    const org = await orgServices.checkOrgNameAvailable(orgPayload?.name)

    if(!user){
        return ApiResponse.failure([],"User not found",404).send(res)
    }
    if(user.auth?.role !== "admin"){
        return ApiResponse.failure([],"Unauthorized ",401).send(res);
    }

    if(org){
        return ApiResponse.failure([],"Orgnization name already exists", 401).send(res);
    }
    const createOrg = await orgServices.createOrganization(orgPayload);
    return ApiResponse.success([createOrg],"Organization created successfully").send(res);
}