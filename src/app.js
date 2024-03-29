import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit:"16kb"})) // accept json data
app.use(express.urlencoded({extended: true,limit:"16kb"}))  // url encoded data
app.use(express.static("public"))   // store pdf , favicon

app.use(cookieParser())

import userRouter from './routes/user.routes.js'

// routes declaration

app.use("/api/v1/users",userRouter)


export {app}