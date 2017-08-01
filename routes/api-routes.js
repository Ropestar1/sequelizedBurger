// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({
      // include: [db.Post]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // burger.create([
  //   "burger_name"
  // ], [
  //   req.body.burger_name
  // ], function() {
  //   res.redirect("/");
  // });

  // // DELETE route for deleting todos. You can access the todo's id in req.params.id
  // app.delete("/api/burgers/:id", function(req, res) {

  // });

  // // PUT route for updating todos. The updated todo will be available in req.body
  // app.put("/api/burgers", function(req, res) {

  // });
};
