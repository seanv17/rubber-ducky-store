var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rubber-ducky-store_test');

module.exports.Category = require('./category.js');
module.exports.Product  = require('./product.js');
// module.exports.Cart     = require('./cart.js');
// module.exports.Shipping = require('./shipping.js');
