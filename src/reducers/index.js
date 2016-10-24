import { combineReducers } from 'redux';
import stations from './stations';
import player from './player';

const radioApp = combineReducers({
  stations,
  player
});

// monkey patching some console messages
const monkey = (state, action) => {
  const result = radioApp(state, action);
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
