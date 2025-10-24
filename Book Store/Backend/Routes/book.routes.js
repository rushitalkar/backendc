import { Router } from "express"
import  getBook  from "../Controller/book.controller.js"

const router = Router()

router.get("/book" , getBook )

export default router