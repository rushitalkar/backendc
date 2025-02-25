import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
import {userRouter} from './routes/user.js'
import {recipesRouter} from "./routes/recipes.js"
app.use(express.json())
app.use(cors({
  origin : "http://localhost:3000"
}))
app.use("/auth" , userRouter)
app.use("/recipes" , recipesRouter)

mongoose.connect("mongodb+srv://rushitalkar:rushiTalkar@cluster0.srit1.mongodb.net/?retryWrites=true&w=majority")

app.listen(3001 , ()=>(console.log("server is running")))