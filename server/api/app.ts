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
import userRoutes from '../routes/user-routes'
import organizationRoutes from '../routes/managment-routes'
import projectRoute from '../routes/project-routes'
import teamRoutes from '../routes/team-routes'
import taskRoutes from '../routes/task-routes'

app.use("/api/v1/users" , userRoutes)
app.use("/api/v1/organization", organizationRoutes)
app.use("/api/v1/projects", projectRoute)
app.use("/api/v1/team", teamRoutes)
app.use("/api/v1/task", taskRoutes)

export default app;