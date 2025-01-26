import mongoose,{Schema, Document} from "mongoose";

export interface IProject extends Document{
    name:string
    description:string
    startDate : Date
    dueDate : Date
    organization: Schema.Types.ObjectId
    managedBy : Schema.Types.ObjectId
    createdBy : Schema.Types.ObjectId
    team : []
}

const projectSchema = new Schema({
    name : {
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    startDate:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
    organization:{
        type:Schema.Types.ObjectId,
        ref:"Organization"
    },
    managedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    team:{
        type:[],
        default:[]
    }
})

const Project = mongoose.model<IProject>("Project", projectSchema)

export default Project;