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

// remove all records that match {} -- which means remove ALL records
db.Category.remove({}, function(err, categories){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all categories');

    // create new records based on the array categories_list
    db.Category.create(categories_list, function(err, categories){
      if (err) { return console.log('err', err); }
      console.log("created", categories.length, "categories");
      process.exit();
    });
  }
});
