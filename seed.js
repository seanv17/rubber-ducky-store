// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var categories_list = [
  {
  name: 'Rubber duckies',
  description: 'Rubber duckies for all!'
  },
  {
  name: 'Tees',
  description: 'Stay fresh, stay rubber-duckying'
  },
  {
  name: 'Miscellaneous',
  description: 'Fighting codeblock one blank stare at a time'
  },
];

var products_list = [
  {
  sku: '123',
  name: 'blue ducky',
  description: 'blue like the ocean',
  price: 1900,
  qty: 45
  },
  {
  sku: '456',
  name: 'red ducky',
  description: 'evil as red',
  price: 2000,
  qty: 23
  },
  {
  sku: '789',
  name: 'purple ducky',
  description: 'royal purple duck',
  price: 2500,
  qty: 34
  },
  {
  sku: 'qwe',
  name: 'green ducky',
  description: 'slime green duck',
  price: 3000,
  qty: 55
  },
  {
  sku: 'rty',
  name: 'gold ducky',
  description: 'golden era duck',
  price: 4000,
  qty: 43
  },
  {
  sku: 'uio',
  name: 'cyan ducky',
  description: 'what is cyan?',
  price: 5000,
  qty: 66
  }
];

db.Product.remove({}, function(err, products) {
  console.log('removed all products');
  db.Product.create(products_list, function(err, products){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all products');
    console.log("created", products.length, "products");


    db.Category.remove({}, function(err, categories){
      console.log('removed all categories');
      categories_list.forEach(function (categoryData) {
        var category = new db.Category({
          name: categoryData.name,
          description: categoryData.description
        });
        db.Product.findOne({name: categoryData.product}, function (err, foundProduct) {
          console.log('found product ' + foundProduct + ' for category ' + category.name);
          if (err) {
            console.log(err);
            return;
          }
          category.product = foundProduct;
          category.save(function(err, savedCategory){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedCategory + ' by ' + foundProduct);
          });
        });
      });
    });

  });
});
