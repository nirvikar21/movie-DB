import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:process.env.LIMIT}))
app.use(express.urlencoded({
    extended:true,
    limit:process.env.LIMIT
}))
app.use(express.static("public"));
app.use(cookieParser())
//Routes import
import homeRouter from  './routes/home.route.js'
import userRouter from  './routes/user.route.js'



//Routes declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/",homeRouter)
export {app}