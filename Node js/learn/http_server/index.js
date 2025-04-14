const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Home Page");
});

app.listen(7000, () => console.log("Hello"));
