import mongoose from "mongoose";

async function connectToDb() {
   return await mongoose.connect(process.env.DB_URI as string ,{dbName:'ProjectXflow'})
}

export default connectToDb;