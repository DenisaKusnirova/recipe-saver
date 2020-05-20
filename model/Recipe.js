const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: String,
  description: String,
  category: String,
  servings: String,
  image: String,
  ingredients: String,
  directions: String,
  cookingTime: String,
  tags: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("recipes", recipeSchema);
