import express from "express";
import {login,signup,logout , updateProfile} from "../controllers/auth.controllers.js"
import { protectRoute} from "../middlewere/auth.middlewear.js"
const router = express.Router()


router.post("/signup" , signup) 
router.post("/login" , login)
router.post("/logout" , logout)
router.put("/update" ,protectRoute , updateProfile)
export default router