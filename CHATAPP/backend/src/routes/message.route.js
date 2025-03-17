
import express from "express";
import protectRoute from "../middlewere/auth.middlewear.js";
import {getUsers} from "../controllers/message.controllers.js"
import {getMessages} from "../controllers/message.controllers.js"
const router = express.Router();

router.get("/users" , protectRoute , getUsers)
router.get("/:id" , protectRoute , getMessages)

export default router
