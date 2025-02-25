import express from "express";
let app = express();
import jwt from "jsonwebtoken";
import bodyParser from "body-parser"
app.use(express.json())
let router = express.Router();
import  {UserModel}  from "../models/users.js";
app.use(bodyParser.json())
import bcrypt from "bcrypt";
import cors from 'cors';
app.use(cors({
  origin : "http://localhost:3000"
}))





router.post("/register" , async function(req, res) {



  const {username , password} = req.body;

  const user = await UserModel.findOne({username })

  if (user) {
     return res.json({message : "User already exist"})
  }


try {

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new UserModel({username , password : hashedPassword})

    await newUser.save()

} catch (error) {

  console.error(error);
  res.status(500).send('An error occurred');

}
  res.json({"message" : "User created"})


})


router.post("/login" ,async function(req,res){
  const {username , password} = req.body;
  const user = await UserModel.findOne({username})

  if(!user){
     return res.json({message : "user DOnt Exit"})
  }
  const isPasswordValid = await bcrypt.compare(password , user.password)

  if (!isPasswordValid) {
      return res.json({message : "Wrong password"})
  }
  const tokken = jwt.sign({id : user._id} , "secrate")
  res.json({tokken , Userid : user._id})
})

export {router as userRouter}

