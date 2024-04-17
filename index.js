const express = require("express");

const server = express();

const morgan = require("morgan");
const router = require("./routes/productRoutes");
// server.use(morgan("default"));

server.use(express.static("public"));

server.use(express.json());

server.use("/", router.router);

server.listen(8080, () => {
  console.log("server start");
});
