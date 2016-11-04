import { createStore, compose } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import radioApp from './reducers/index';

import preset from './data/preset.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  let store = createStore(radioApp, preset, composeEnhancers(
    autoRehydrate()
  ));
  persistStore(store, {whitelist: ['stations'], debounce: 1000, keyPrefix:'r'});

  // TODO: remove this hack
  window.store = store;
  return store;
};

export default configureStore;
