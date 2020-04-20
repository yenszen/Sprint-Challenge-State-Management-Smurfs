import axios from "axios";
import { FETCH_SMURFS, ADD_SMURF, DELETE_SMURF } from "./types";

export const fetchSmurfs = () => dispatch => {
  return axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("actions.js: fetchSmurfs", res);
      dispatch({ type: FETCH_SMURFS, payload: res.data });
    })
    .catch(err => console.log(err));
};
