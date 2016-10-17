import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import radioApp from './reducers'
import App from './components/App';

import './index.css';

const persistentState = {
  stations: [
    {
      id: 111111111,
      title: 'FIP — France Inter Paris', description: "Radio eclectique pour hipsters à lunettes",
      source: "http://aifae8cah8.lb.vip.cdn.dvmr.fr/fip-midfi.mp3"
    },
    {
      id: 222222222,
      title: 'Radio Nova', description: "De la soupe avec des animatrices snobinardes",
      source: "http://novazz.ice.infomaniak.ch/novazz-128.mp3?listenerid=410281891613c89cb6cc823c55ad7e7f&awparams=companionAds%3Atrue"
    },
    {
      id: 333333333,
      title: 'France Inter', description: "Actualité pour bobos plutôt rive gauche caviar",
      source: "http://aifae8cah8.lb.vip.cdn.dvmr.fr/franceinter-midfi.mp3"
    },
    {
      id: 444444444,
      title: 'Radio Meuh', description: "En direct de Roblochonland",
      source: "http://radiomeuh.ice.infomaniak.ch:8000/radiomeuh-128.mp3"
    }
  ],
  player: undefined
}

let store = createStore(radioApp, persistentState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
