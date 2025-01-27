import mongoose from "mongoose";

async function connectToDb() {
   return await mongoose.connect(process.env.NODE_ENV === "production" ? process.env.PROD_DB_URI as string: process.env.DB_URI as string ,{dbName:'ProjectXflow'})
}

export default connectToDb;