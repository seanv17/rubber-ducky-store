// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

// set 'html' as the engine, using ejs's renderFile function
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// get all categories
app.get('/api/categories', function (req, res) {
  // send all categories as JSON response
  db.Category.find()
    // populate-fills in the product id with all the product data
    .populate('product')
    .exec(function(err, categories) {
      if (err) { return console.log('index error: ', err); }
      res.json(categories);
    });
});

// get one category
app.get('/api/categories/:id', function (req, res) {
  db.Categories.findOne({ _id: req.params._id }, function(err, data) {
    res.json(data);
  });
});

// create new category
app.post('/api/categories', function (req, res) {
  // create new category with form data ('req.body')
  var newCategory = new db.Category({
    name: req.body.name,
    description: req.body.description
  });

  // only adds a product to a category if the product already exists
  db.Product.findOne({ name: req.body.product }, function(err, product) {
    newCategory.product = product;
    // add new Category to database
    newCategory.save(function(err, category) {
      if (err) { return console.log('created error: ', err ); }
        console.log('created :', category.name);
        res.json(category);
    });
  });
});

// delete category
app.delete('/api/categories/:id', function (req, res) {
  // get category id from URL params ('req.params')
  console.log('category to be deleted', req.params);
  var categoryId = req.params.id;
  // find the index of the category we want to remove
  db.Category.findOneAndRemove({ _id: categoryId }, function (err, deletedCategory) {
    res.json(deletedCategory);
  });
});

/*
 * JSON API Endpoints
 */



// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
