import { createStore, compose } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import radioApp from './reducers/index';

import preset from './data/preset.js';

const devtool = () => {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  else return () => ({});
};

const configureStore = () => {
  const persistedState = preset;
  let store = createStore(radioApp, persistedState, compose(
    autoRehydrate(),
    devtool()
  ));
  persistStore(store, {whitelist: ['stations'], debounce: 1000, keyPrefix:'r'});

  // TODO: remove this hack
  window.store = store;
  return store;
};

export default configureStore;
