import mongoose, { Schema, Document } from 'mongoose';

// Define the IOrganization interface
interface IOrganization extends Document {
  name: string;
  description: string;
  subscription?:{
    planId:Schema.Types.ObjectId;
    startDate:Date;
    endDate:Date;
    status:string;
    billingCycle: string
  }; 
  createdBy: Schema.Types.ObjectId;
}


const organizationSchema = new Schema<IOrganization>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subscription: {
    type: Object, 
    required:true,
    default:{}

  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});


const Organization = mongoose.model<IOrganization>('Organization', organizationSchema);

export { IOrganization, Organization };
