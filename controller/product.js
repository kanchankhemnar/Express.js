const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
// C R U D - create read update delete
exports.createProduct = (req, res) => {
  //Post
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
};
exports.getAllProducts = (req, res) => {
  //get
  res.json(products);
};

exports.getProduct = (req, res) => {
  // get
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

exports.updateProduct = (req, res) => {
  //put
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  products.splice(product, 1, { ...product, ...req.body });
  res.json( " updated");
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1);
  res.json( "item deleted");
};
