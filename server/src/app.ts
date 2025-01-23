import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config({
    path:"./.env"
})

const app = express();
app.use(cors({
    origin:true,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

// importing necessary routes
import userRoutes from './../routes/user-routes'
import organizationRoutes from '../routes/managment-routes'

app.use("/api/v1/users" , userRoutes)
app.use("/api/v1/organization", organizationRoutes)

export default app;