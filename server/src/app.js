import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'



const app = express()


app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use(cookieParser())


// routes
import destinationRouter from './routes/destination.routes.js'
import categoryRouter from './routes/category.routes.js'
import likeRouter from './routes/like.routes.js'
import userRouter from './routes/user.routes.js'
import commentRouter from './routes/comment.routes.js'




app.use("/api/v1/destination", destinationRouter)
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/like", likeRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/comment", commentRouter)


export default app