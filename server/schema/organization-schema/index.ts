import mongoose, { Schema, Document } from 'mongoose';

// Define the IOrganization interface
interface IOrganization extends Document {
  name: string;
  description: string;
  subscription?: Schema.Types.ObjectId; 
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
    type: Schema.Types.ObjectId, 
    ref: 'Subscription',

  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});


const Organization = mongoose.model<IOrganization>('Organization', organizationSchema);

export { IOrganization, Organization };
