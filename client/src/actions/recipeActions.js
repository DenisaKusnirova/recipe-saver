import axios from "../axios";
import { FETCH_RECIPES, ADD_NEW_RECIPE } from "./types";

export const fetchRecipes = () => async (dispatch) => {
  const res = await axios.get("/api/recipes");
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};

export const addNewRecipe = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/recipe/new", { values });
  history.push("/home");
  dispatch({ type: ADD_NEW_RECIPE, payload: res.data });
};
