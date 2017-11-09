import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import reduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';

const middleware = [reduxThunk];

const persistedState = loadState();

const enhancer = applyMiddleware(...middleware);
const store = createStore(rootReducer, persistedState, enhancer);

store.subscribe(throttle(() => {
  saveState({
    chars: store.getState().chars
    });
}, 1000));

export default store;
