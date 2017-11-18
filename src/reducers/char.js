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
      debugger
      return Object.assign({}, state, { chars: chars });
    }
    case Action.KILL_CHAR: {
      debugger
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
