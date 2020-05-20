import RECIPE_CATEGORIES from "./recipeCategories";

const FIELDS = [
  { label: "Title", name: "title", type: "textField", multiline: false },
  {
    label: "Number of servings",
    name: "servings",
    type: "textField",
    number: true,
  },
  { label: "Cooking time", name: "cookingTime", type: "textField" },
  {
    label: "Category",
    name: "category",
    type: "select",
    choices: RECIPE_CATEGORIES,
  },
  {
    label: "Ingredients",
    name: "ingredients",
    type: "textField",
    multiline: true,
  },
  {
    label: "Directions",
    name: "directions",
    type: "textField",
    multiline: true,
  },
  { label: "Tags", name: "tags", type: "textField", multiline: false },
  { label: "Image", name: "image", type: "textField", multiline: false },
];

export default FIELDS;
