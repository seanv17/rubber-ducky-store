// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');

// serve static files from public folder
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
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

// update one category
app.put('/api/categories/:id', function (req, res) {
  console.log('req.body: ', req);
  var categoryId = req.body._id;
  var newName = req.body.name;
  var newDescription = req.body.description;
  db.Category.findById({ _id: req.params.id }, function(err, data) {
    console.log('data: ', data);
    data.name = newName;
    data.description = newDescription;
    data.save(function(err, updatedCategory) {
      if(err) { return console.log('saving error: ', err); }
      console.log('created :', updatedCategory);
      // send back the updated category!
      res.json(updatedCategory);
    });
  });
});

// create new category
app.post('/api/categories', function (req, res) {
  // create new category with form data ('req.body')
  console.log(req.body);
  var newCategory = new db.Category({
    name: req.body.name,
    description: req.body.description,
  });
  // find the product from req.body
  db.Product.findOne({ name: req.body.product }, function(err, product) {
    if (err) {
      return console.log('err: ', err);
    }
    // add this product to the category
    newCategory.save(function(err, category) {
      if (err) { return console.log('created error: ', err ); }
        console.log('created :', category.name);
        // send back the category!
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
  db.Category.findOneAndRemove({ _id: categoryId })
    .populate('product')
    .exec(function (err, deletedCategory) {
    res.json(deletedCategory);
  });
});

/*
 * JSON API Endpoints
 */

app.get('/templates/:name', controllers.api.templates);


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
