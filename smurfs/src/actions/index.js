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

export const addSmurf = newSmurf => dispatch => {
  return axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log("actions.js: addSmurf", res);
      dispatch({ type: ADD_SMURF, payload: res.data[res.data.length - 1] });
    })
    .catch(err => console.log(err));
};

export const deleteSmurf = smurfId => dispatch => {
  return axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF, payload: smurfId });
    })
    .catch(err => console.log(err));
};
