import mongoose from "mongoose";

async function connectToDb() {
   const DB_URI = process.env.NODE_ENV === "production" ? process.env.PRO_DB_URI : process.env.DB_URI
   return await mongoose.connect(DB_URI as string ,{dbName:'ProjectXflow'})
}

export default connectToDb;