require("dotenv").config();
console.log("env", process.env.DB_PASSWORD);
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const morgan = require("morgan");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("db connected");
}

// server.use(morgan("default"));

server.use(express.static("public"));

server.use(express.json());
const router = require("./routes/productRoutes");

server.use("/", router.router);

server.listen(process.env.PORT, () => {
  console.log("server start");
});
