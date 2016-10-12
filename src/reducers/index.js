import { combineReducers } from 'redux';
import stations from './stations';
import player from './player';

const radioApp = combineReducers({
  stations,
  player
});

export default radioApp;
