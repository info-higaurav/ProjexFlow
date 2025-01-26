import mongoose, {Document, Schema} from 'mongoose'

export interface ITeam extends Document{
    name: string
    description:string
    memebers: []
    managedBy:Schema.Types.ObjectId
}

const teamSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    managedBy: {type: Schema.Types.ObjectId, ref: 'User', required: true},
})

const Team = mongoose.model<ITeam>("Team", teamSchema)

export default Team;