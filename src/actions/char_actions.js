export const ADD_CHAR = "ADD_CHAR";
export const GET_CHARS = "GET_CHARS";
export const KILL_CHAR = "KILL_CHAR";
export const EDIT_CHAR = "EDIT_CHARS";
export const STOP_EDITING = "STOP_EDITING";
export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";


export const addChar = (charData) => ({
  type: ADD_CHAR,
  info: {charData}
});

export const getChars = (charData) => ({
  type: GET_CHARS,
  info: {charData}
});

export const killChar = (idx) => ({
  type: KILL_CHAR,
  idx: idx
});

export const editChars = () => ({
  type: EDIT_CHAR
});

export const stopEditing = () => ({
  type: STOP_EDITING
});

export const openForm = () => ({
  type: OPEN_FORM
})

export const closeForm = () => ({
  type: CLOSE_FORM
})
