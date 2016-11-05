import { combineReducers } from 'redux';
import stations from './stations';
import player from './player';
import next from './next';

const radioApp = combineReducers({
  stations,
  player
});

// TODO: use reselect instead of this hack
const specialAction = (state, action) => {
  // add the next() reducer which runs at root level
  return radioApp(next(state, action), action);
};

// monkey patching some console messages
// TODO: use a proper middleware logger
const monkey = (state, action) => {
  const result = specialAction(state, action);
  console.group(action.type);
  console.info('dispatching', action);
  // console.log(state, result);
  for (let firstLevel in state) {
    if (state.hasOwnProperty(firstLevel)) {
      console.group(firstLevel);
      console.log('prev:', state[firstLevel]);
      console.log('next:', result[firstLevel]);
      console.groupEnd(firstLevel);
    }
  }
  console.groupEnd(action.type);
  return result;
};

export default monkey;
