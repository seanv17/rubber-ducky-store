function index(req, res) {
  res.json({
    message: "Welcome to rubber-ducky-store!",
    documentation_url: "#",
    base_url: "http://rubber-ducky-store.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

function templates(req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
}

module.exports.index = index;
module.exports.templates = templates;
