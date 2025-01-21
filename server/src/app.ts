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

export default app;