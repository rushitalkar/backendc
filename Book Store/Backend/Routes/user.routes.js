import { Router } from "express";

import { signUp , login} from "../Controller/user.controller.js";
let router = Router()

router.post("/signup" , signUp)
router.post("/login" , login)


export default router