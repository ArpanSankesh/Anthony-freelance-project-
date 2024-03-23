import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(3000, () => {
  console.log("listining");
});
