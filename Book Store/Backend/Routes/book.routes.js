import { Router } from "express"
import  getBook  from "../Controller/book.controller.js"
import createBook from "../Controller/book.create.js"

const router = Router()

router.get("/book" , getBook )
router.post("/addbook" , createBook)

export default router