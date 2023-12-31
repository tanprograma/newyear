import express from "express";
import path from "path";
const app = express();
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server actively listening");
});
