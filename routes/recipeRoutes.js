const mongoose = require("mongoose");
const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const Recipe = mongoose.model("recipes");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.get("/api/recipes", async (req, res) => {
    const recipes = await Recipe.find({ _user: req.user.id });
    res.send(recipes);
  });

  app.post("/api/recipe/delete", requireLogin, async (req, res) => {
    try {
      await Recipe.deleteOne({ _id: req.body._id });
      const recipes = await Recipe.find({ _user: req.user.id });
      res.send(recipes);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/recipe/new", async (req, res) => {
    console.log(req.body);
    const { title, servings, ingredients, directions, cookingTime } = req.body;

    const recipe = new Recipe({
      title,
      servings,
      ingredients,
      directions,
      cookingTime,
      _user: req.user.id,
    });

    try {
      await recipe.save();
      res.send("all saved");
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/recipe/:recipeId", requireLogin, async (req, res) => {
    try {
      const recipe = await Recipe.findOne({ _id: req.body.recipeId });
      res.send(recipe);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
