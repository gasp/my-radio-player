import { createStore } from 'redux';
import radioApp from './reducers/index';

import preset from './data/preset.js';

const configureStore = () => {
  const persistedState = preset;
  let store = createStore(radioApp, persistedState);

  // TODO: remove this hack
  window.store = store;
  return store;
};

export default configureStore;
