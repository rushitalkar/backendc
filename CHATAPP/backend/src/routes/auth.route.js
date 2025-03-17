import express from "express";
import {login,signup,logout , updateProfile , checkAuth} from "../controllers/auth.controllers.js"
import  protectRoute from "../middlewere/auth.middlewear.js"
import cookieParser from "cookie-parser"

const router = express.Router()
express().use(cookieParser())

router.post("/signup" , signup) 

router.post("/login" , login)

router.post("/logout" , logout)

router.put("/update" ,protectRoute , updateProfile)

router.get("/check" , protectRoute , checkAuth)
export default router