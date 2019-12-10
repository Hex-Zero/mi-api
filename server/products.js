const router = require("express").Router();
let Product = require("./product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const local = req.body.local;
  const sku = req.body.sku;
  const title = req.body.title;
  const brand = req.body.brand;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const size = req.body.size;
  const isnew = req.body.isnew;
  const sale = req.body.sale;
  const inventory = req.body.inventory;
  const category = req.body.category;

  const newProduct = new Product({
    local,
    sku,
    title,
    brand,
    description,
    ingredients,
    size,
    isnew,
    sale,
    inventory,
    category
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.local = req.body.local;
      product.sku = req.body.sku;
      product.title = req.body.title;
      product.brand = req.body.brand;
      product.description = req.body.description;
      product.ingredients = req.body.ingredients;
      product.size = req.body.size;
      product.isnew = req.body.isnew;
      product.sale = req.body.sale;
      product.inventory = req.body.inventory;
      product.category = req.body.category;

      product
        .save()
        .then(() => res.json("product updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
