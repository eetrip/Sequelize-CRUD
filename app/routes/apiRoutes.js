module.exports = function(app, db) {
  // findall
  app.get("/api/all", function(req, res) {
    db.Item.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // create a new one
  app.post("/api/new", function(req, res) {
    db.Item.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price
    }).then(function(result) {
      res.json(result);
    });
  });

  // find one
  app.get("/api/:id", function(req, res) {
    db.Item.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // update an existing one
  app.put("/api/update/:id", function(req, res) {
    db.Item.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });

  // delete one
  app.delete("/api/delete/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // verification response for loader.io for api load testing
  // app.get("/loaderio-d09d835ae43ae54511fb785f48259ad3", function(req, res) {
  //   res.send("loaderio-d09d835ae43ae54511fb785f48259ad3");
  // });
};
