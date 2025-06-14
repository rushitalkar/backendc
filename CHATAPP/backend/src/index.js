import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
const app = express()
import { connectDB } from "./lib/db.js";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
app.use(cors({
    origin : "http://localhost:5173/",
    credentials : true,
}))
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/auth" , authRoutes)
app.use("/api/messages" , messageRoutes)


dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`); 
    connectDB()
})