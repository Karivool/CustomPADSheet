// Module
import { combineReducers } from 'redux';

import CharReducer from './char.js';

// File

const rootReducer = combineReducers({
  chars: CharReducer
});

export default rootReducer;
