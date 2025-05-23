import express from "express"
import { handleUserSignUp, handleUserLogin } from "../controllers/user.js"
const router = express.Router()

router.post("/signup", handleUserSignUp)
router.post("/login", handleUserLogin)
export default router