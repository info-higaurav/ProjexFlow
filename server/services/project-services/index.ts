
import Project from "../../schema/project-schema"

class ProjectService {
    async createProject(payload:any){
        const project = await Project.create(payload)
        return project
    }
}

export default ProjectService;