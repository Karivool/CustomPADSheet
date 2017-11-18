import * as Action from '../actions/char_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  chars: {},
  formOpened: false,
};

const CharReducer = (state = defaultState, action) => {
  switch(action.type) {
    case Action.ADD_CHAR: {
      let char = action.info.charData;
      let updatedChars = state.chars;
      let updatedData = updatedChars.concat(char);
      return Object.assign({}, state, { chars: updatedData });
    }
    case Action.GET_CHARS: {
      let chars = action.info.charData;
      return Object.assign({}, state, { chars: chars });
    }
    case Action.KILL_CHAR: {
      let id = action.idx;
      let updatedChars;

      for (var i = 0; i < state.chars.length; i++) {
        if (state.chars[i]._id === id) {
          let left = state.chars.slice(0, i);
          let right = state.chars.slice(i + 1, state.chars.length);
          updatedChars = left.concat(right);
        }
      }
      return Object.assign({}, state, { chars: updatedChars});
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
