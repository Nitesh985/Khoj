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

app.use("/api/v1/destination", destinationRouter)


export default app