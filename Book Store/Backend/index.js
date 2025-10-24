import express from 'express'
import connectDB from './Mongoose/mongodb.js'
import bookRoute from './Routes/book.routes.js'
import userRoute from './Routes/user.routes.js'
import cors from 'cors'
const app = express()

const port = process.env.PORT || 5000

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}))

app.use(express.json())
app.use("/api",bookRoute)

app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`listening on port ${port}`)
  connectDB()
  
})