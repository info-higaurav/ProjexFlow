import mongoose , {Document, Schema} from "mongoose";

export interface ISubscription extends Document{
    name : string
    price : string
    maxUsers : string
    maxProjects : string
    features ? :  object[]
}
const planSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: String,
        required: true,
        trim: true,
      },
      maxUsers: {
        type: String,
        required: true,
        trim: true,
      },
      maxProjects: {
        type: String,
        required: true,
        trim: true,
      },
      features: {
        type: [{ type: Object }],
        default: [],
      },
})

const Plan = mongoose.model<ISubscription>("Plan", planSchema);

export default Plan;