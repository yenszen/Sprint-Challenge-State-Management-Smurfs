import { FETCH_SMURFS } from "../actions/types";

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, smurfs: action.payload };
    default:
      return state;
  }
};
