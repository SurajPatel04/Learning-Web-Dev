import express from "express";
import urlRoute from "./routes/url.js";
import connectDB from "./connection.js";
const app = express();

app.use(express.json());

connectDB();

app.use("/api/url", urlRoute);

app.listen(8001, () => console.log("Server is started at 8000"));
