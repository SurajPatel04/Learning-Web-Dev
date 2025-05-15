import express from "express";
import urlRoute from "./routes/url.js";
import connectDB from "./connection.js";
import path from "path";
import URL from "./models/url.js";
import staticRouter from "./routes/staticRouter.js"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { restrictToLoggedUserOnly, checkAuth } from "./middlewares/middlewareAuth.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectDB();

app.use("/api/url",restrictToLoggedUserOnly, urlRoute);
app.use("/",checkAuth,staticRouter)
app.use("/", userRouter)

app.get("/test", async (req, res) => {
  const allurls = await URL.find({});

  return res.render("home", {
    urls: allurls,
  });
});

app.listen(8001, () => console.log("Server is started at 8001"));
