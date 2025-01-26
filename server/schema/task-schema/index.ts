import mongoose,{Document, Schema} from "mongoose";

export interface ITask extends Document{
    title:string
    description:string
    notes:string
    startDate:string
    dueDate:string
    assignor:Schema.Types.ObjectId
    assignee:Schema.Types.ObjectId
    projectId:Schema.Types.ObjectId
    tags? : [string]
}

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    dueDate:{
        type:Date,
        required:true
    },
    assignor:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }, 
    assignee:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    projectId:{
        type:Schema.Types.ObjectId,
        ref:'Project',
        required:true
    },
    tags:[String]
})

const Task = mongoose.model<ITask>('Task',taskSchema);
export default Task;