import { createStore } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import radioApp from './reducers/index';

import preset from './data/preset.js';

const configureStore = () => {
  const persistedState = preset;
  let store = createStore(radioApp, persistedState, autoRehydrate());
  persistStore(store, {whitelist: ['stations'], debounce: 1000, keyPrefix:'r'});

  // TODO: remove this hack
  window.store = store;
  return store;
};

export default configureStore;
