const express = require("express");
require("dotenv").config();
const app = express();

const userRouter = require("./routes/user");
const connectMongoDB = require("./db/db");

connectMongoDB();
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(8000, () => console.log("Server is started"));
