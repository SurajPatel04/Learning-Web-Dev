import express from "express"
import dotenv from "dotenv"
import connectDB from "./connection.js"
import { handleSignUp,requireAuth,  } from "./controller/user.js"
dotenv.config()
connectDB();
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.get("/signup", (req, res)=>{
    return res.render("signup")
})

app.post("/signup",handleSignUp)

app.get("/", requireAuth, (req, res)=>{
    return res.render("home")
})
app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.send("read page")
})


app.listen(8001, () => console.log("Server is started at 8001"));