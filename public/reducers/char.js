import * as Action from '../actions/char_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  chars: [],
};

const CharReducer = (state = defaultState, action) => {
  switch(action.type) {
    case Action.GET_CHAR: {
      let charName = action.info.charName;
      let char = action.info.char;
      let updatedCoords = state.char;
      if (char.charName === undefined) {
        char.charName = charName;
        updatedCoords = updatedCoords.concat(char);
      }
      let updatedData = state.data.concat(action.info.data);
      return Object.assign({}, state, { char: updatedChars,
                                        data: updatedData });
    }
    case Action.KILL_CHAR: {
      let idx = action.idx;

      let left = state.char.slice(0, idx);
      let right = state.char.slice(idx + 1, state.char.length);
      let updatedCoords = left.concat(right);

      left = state.data.slice(0, idx);
      right = state.data.slice(idx + 1, state.data.length);
      let updatedData = left.concat(right);

      return Object.assign({}, state, { char: updatedChars,
                                        data: updatedData});
    }
    case Action.EDIT_CHARS:
      return Object.assign({}, state, { editing: true});
    case Action.STOP_EDITING:
      return Object.assign({}, state, { editing: false});
    case Action.SEE_CHAR_DETAIL:
      return Object.assign({}, state, { showDetailed: true, detailedInfo: action.info});
    case Action.CLOSE_CHAR_DETAIL:
      return Object.assign({}, state, { showDetailed: false, detailedInfo: {}})
    default:
      return state;
  }
};

export default WeatherReducer;
