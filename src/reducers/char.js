import * as Action from '../actions/char_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  chars: [],
  formOpened: false,
};

const CharReducer = (state = defaultState, action) => {
  switch(action.type) {
    case Action.ADD_CHAR: {
      debugger
      let char = action.info.char;
      let updatedChars = state.char;
      let updatedData = state.data.concat(action.info.data);
      return Object.assign({}, state, { char: updatedChars,
                                        data: updatedData });
    }
    case Action.KILL_CHAR: {
      let idx = action.idx;

      let left = state.char.slice(0, idx);
      let right = state.char.slice(idx + 1, state.char.length);
      let updatedChars = left.concat(right);

      left = state.data.slice(0, idx);
      right = state.data.slice(idx + 1, state.data.length);
      let updatedData = left.concat(right);

      return Object.assign({}, state, { char: updatedChars,
                                        data: updatedData});
    }
    case Action.OPEN_FORM:
      return Object.assign({}, state, { formOpened: true });
    case Action.CLOSE_FORM:
      return Object.assign({}, state, { formOpened: false });
    default:
      return state;
  }
};

export default CharReducer;
