var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
var db = require('../models');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({
    }).then(function(dbBurger) {
      var hbsObject = {
        burger: dbBurger
      };
      res.render("index", hbsObject)
    });
});

router.post("/", function(req, res) {
  db.Burger.create(req.body).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  // console.log('req.params.id', req.params.id);
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // db.Burger.update({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });

  db.Burger.update({
    devoured: req.body.devoured,
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
