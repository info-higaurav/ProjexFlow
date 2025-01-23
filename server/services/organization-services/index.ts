import { IOrganization, Organization } from "../../schema/organization-schema";
import { orgValidation } from "../validation/organization-validation"
class OrganizationServices {
     async createOrganization (payload:any) {
       const org = await Organization.create(payload)
        const orgId = org._id;
        return await Organization.findById(orgId);
    }

    async validateOrgPayload (payload:IOrganization){
        return orgValidation.parse(payload)
    }

    async checkOrgNameAvailable (orgName : string){
       return await Organization.findOne({name: orgName})
    }
}

export default OrganizationServices;