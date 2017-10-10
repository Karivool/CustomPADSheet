import { receiveChar } from '../util/statform_util.js';

export const GET_ALL_CHARS = "GET_ALL_CHARS";
export const GET_CHAR = "GET_CHAR";
export const KILL_CHAR = "KILL_CHAR";
export const SEE_CHAR_DETAIL = "SEE_CHAR_DETAIL";
export const CLOSE_CHAR_DETAIL = "CLOSE_CHAR_DETAIL";
export const EDIT_CHARS = "EDIT_CHARS";
export const STOP_EDITING = "STOP_EDITING";

export const reqChar = (coords, charName) => (dispatch) => {
  return receiveChar(coords)
    .then((data) => dispatch(getChar(coords, charName, data)))
    .catch((error) => console.log(error));
};

export const getChar = (coords, charName, data) => ({
  type: GET_CHAR,
  info: {coords, charName, data}
});

export const levelChar = (idx) => ({
  type: KILL_CHAR,
  idx: idx
});

export const seeCharDetail = (info) => ({
  type: SEE_CHAR_DETAIL,
  info: info
});

export const closeCharDetail = () => ({
  type: CLOSE_CHAR_DETAIL,
});

export const editChars = () => ({
  type: EDIT_CHARS
});

export const stopEditing = () => ({
  type: STOP_EDITING
});
