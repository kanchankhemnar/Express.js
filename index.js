const productController = require("./controller/product");


const express = require("express");

const server = express();
const productRouter=express.Router();

const morgan = require("morgan");
// server.use(morgan("default"));

server.use(express.static("public"));

server.use(express.json());

// C R U D - create read update delete
//CREATE POST /products

server.post("/products", productController.createProduct);

//READ GET /products

server.get("/products", productController.getAllProducts);

//READ GET /products/:id---->id is taken by user
server.get("/products/:id", productController.getProduct);

//UPDATE PUT /products/:id

server.put("/products/:id", productController.updateProduct);
//UPDATE PATCH /products/:id

server.patch("/products/:id", productController.updateProduct);

//DELETE DELETE /products/:id

server.delete("/products/:id", productController.deleteProduct);

server.listen(8080, () => {
  console.log("server start");
});
