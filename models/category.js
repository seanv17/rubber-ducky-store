var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  description: String,
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
});

var Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
