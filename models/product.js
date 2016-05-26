var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductSchema = new Schema({
  sku: String,
  name: String,
  description: String,
  image: String,
  price: Number,
  qty: Number,
  length: Number,
  width: Number,
  height: Number,
  weight: Number,
  size: String,
  color: String,
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
