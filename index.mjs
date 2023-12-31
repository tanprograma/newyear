import express from "express";
import path from "path";
const app = express();
app.use(express.static("public"));
app.get("/", (res, res) => {
  res.sendFile("/public/index.html");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server actively listening");
});
