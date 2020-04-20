import { FETCH_SMURFS, ADD_SMURF, DELETE_SMURF } from "../actions/types";

export const reducers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return { ...state, smurfs: action.payload };
    case ADD_SMURF:
      return { ...state, smurfs: [...state.smurfs, action.payload] };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => action.payload !== smurf.id)
      };
    default:
      return state;
  }
};
