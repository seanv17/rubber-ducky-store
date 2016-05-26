/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/categories
function index(req, res) {
  db.Category.find({}, function(err, allCategories) {
    res.json(allCategories);
  });
}

function create(req, res) {
  console.log('body: ', req.body);

  // split at comma and remove trailing space
  if (req.body.product) {
    var product = req.body.product.split(',').map(function(item) { return item.trim(); } );
    req.body.product = product;
  }

  db.Category.create(req.body, function(err, category) {
    if (err) { console.log('error: ', err); }
    console.log(category);
    res.json(category);
  });
}

function show(req, res) {
  db.Category.findById(req.params.categoryId, function(err, foundCategory) {
    if(err) { console.log('categoriesController.show error: ', err); }
    console.log('categoriesController.show responding with: ', foundCategory);
    res.json(foundCategory);
  });
}

function destroy(req, res) {
  db.Category.findOneAndRemove({ _id: req.params.categoryId }, function(err, foundCategory) {
    res.json(foundCategory);
  });
}

function update(req, res) {
  console.log('updating w data', req.body);
  db.Category.findById(req.params.categoryId, function(err, foundCategory) {
    if(err) { console.log('categoriesController.update error: ', err); }
    foundCategory.name = req.body.name;
    foundCategory.description = req.body.description;
    foundCategory.save(function(err, savedCategory) {
      if(err) { console.log('saving altered category failed');}
      res.json(savedCategory);
    });
  });

}

// export public methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
