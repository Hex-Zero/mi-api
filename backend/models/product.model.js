const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  local: { type: String },
  sku: { type: String },
  title: { type: String },
  brand: { type: String },
  description: { type: String },
  ingredients: { type: [] },
  size: { type: String },
  isnew: { type: Boolean },
  sale: { type: Boolean },
  inventory: { type: Number },
  category: { type: String }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
