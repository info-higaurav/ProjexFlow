import Task, { ITask } from "../../schema/task-schema";
import taskValidation from "../validation/task-validation";

class TaskServices {
    async taskPayloadValidation (payload:ITask){
      return taskValidation.parse(payload)
    }

    async createTask (payload:any){
     return await Task.create(payload)
    }
}

export default TaskServices;