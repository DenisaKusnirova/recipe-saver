import { FETCH_RECIPES } from "../actions/types";

const initialState = {
  recipes: [],
};

export default function recipesReducer(state = initialState, action) {
  console.log("Action:", action);
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload || null,
      };
    default:
      return state;
  }
}
