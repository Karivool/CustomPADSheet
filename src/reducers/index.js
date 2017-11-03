// Module
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import CharReducer from './char.js';

// File

const rootReducer = combineReducers({
  chars: CharReducer,
  form: formReducer,
});

export default rootReducer;
