var mongoose = require('mongoose'),
      Schema = mongoose.Schema,

var Product  = require('./product');
var Shipping = require('./shipping');

var CartSchema = new Schema({
  status: Boolean,
  products: [Product.schema],
  shipping: [Shipping.schema]
});
