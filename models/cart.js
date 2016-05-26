var mongoose = require('mongoose'),
      Schema = mongoose.Schema,

var ProductSchema = new Schema({
   sku: String,
   name: String,
   description: String,
   image: String,
   price: Number,
   inv_qty: Number,
   length: Number,
   width: Number,
   height: Number,
   weight: Number,
   size: String,
   color: String,
});

var ShippingSchema = new Schema({
  full_name: String,
  address_line1: String,
  address_line2: String,
  city: String,
  postal_code: String,
  state_province: String,
  country: String,
});

var CartSchema = new Schema({
  status: Boolean,
  products: [ProductSchema],
  shipping: ShippingSchema
});
