import express from "express";
import urlRoute from "./routes/url.js";
import connectDB from "./connection.js";
import path from "path";
import URL from "./models/url.js";
import staticRouter from "./routes/staticRouter.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectDB();

app.use("/api/url", urlRoute);
app.use("/", staticRouter)

app.get("/test", async (req, res) => {
  const allurls = await URL.find({});

  return res.render("home", {
    urls: allurls,
  });
});

app.listen(8001, () => console.log("Server is started at 8001"));
