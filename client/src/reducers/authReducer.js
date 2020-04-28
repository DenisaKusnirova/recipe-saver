import { FETCH_USER } from "../actions/types";

const initialState = {
  currentUser: null,
};

export default function authReducer(state = initialState, action) {
  console.log("Action:", action);
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        currentUser: action.payload || null,
      };
    default:
      return state;
  }
}
