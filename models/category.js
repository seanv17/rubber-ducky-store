var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CategorySchema = new Category({
  name: String,
  description: String
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
