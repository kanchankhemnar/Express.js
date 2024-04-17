const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
router
  .post("/products", productController.createProduct)

  //READ GET /products

  .get("/products", productController.getAllProducts)

  //READ GET /products/:id---->id is taken by user
  .get("/products/:id", productController.getProduct)

  //UPDATE PUT /products/:id

  .put("/products/:id", productController.updateProduct)
  //UPDATE PATCH /products/:id

  .patch("/products/:id", productController.updateProduct)

  //DELETE DELETE /products/:id

  .delete("/products/:id", productController.deleteProduct);

exports.router = router;
