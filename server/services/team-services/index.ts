import Team from "../../schema/team-schema"
import teamValidate from "../validation/team-validation"

class TeamService{
    async createTeam(payload:any){
        const team = await Team.create(payload)
        return team
    }

    async validateTeam(payload:any){
        const result = teamValidate.parse(payload)
        return result
    }
}

export default TeamService;