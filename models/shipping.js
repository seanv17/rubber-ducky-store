var mongoose = require('mongoose'),
      Schema = mongoose.Schema,

var ShippingSchema = new Schema({
  full_name: String,
  address_line1: String,
  address_line2: String,
  city: String,
  postal_code: String,
  state_province: String,
  country: String,
});
