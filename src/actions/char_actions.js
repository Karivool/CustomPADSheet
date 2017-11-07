import { createChar } from '../util/statform_util.js';

export const ADD_CHAR = "ADD_CHAR";
export const GET_CHARS = "GET_CHARS";
export const KILL_CHAR = "KILL_CHAR";
export const EDIT_CHAR = "EDIT_CHARS";
export const STOP_EDITING = "STOP_EDITING";

export const addChar = (charData) => (dispatch) => {
  return createChar(charData)
    .then((data) => dispatch(reqChar(charData)))
    .catch((error) => console.log(error));
};

export const reqChar = (charData) => ({
  type: GET_CHARS,
  info: {charData}
});

export const levelChar = (idx) => ({
  type: KILL_CHAR,
  idx: idx
});

export const editChars = () => ({
  type: EDIT_CHAR
});

export const stopEditing = () => ({
  type: STOP_EDITING
});
