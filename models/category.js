var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Product  = require('./product');

var CategorySchema = new Schema({
  name: String,
  description: String,
  product: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },]
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
