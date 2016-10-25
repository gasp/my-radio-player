
const station = (state = {}, action) => {
  switch (action.type) {
    case 'STATION_ADD':
      return {
        id: action.id,
        title: action.title,
        source: action.source,
        selected: false
      };
    // not implemented methods
    /*
    case 'STATION_SELECT':
      if (station.id !== state.id) {
        return state;
      }
      return {...state, selected: true};
    case 'STATION_DESELECT':
      if (state.id !== state.id) {
        return state
      }
      return {...state, selected: false};
  */
    default:
      return state;
  }
};

const stations = (state = [], action) => {
  switch (action.type) {
    case 'STATION_ADD':
      return [...state, station(undefined, action.station)];
    /*
    case 'STATION_SELECT':
      return [...state, station(undefined, action.station)];
    /*
    case 'STATION_NEXT':
      const currentIndex = state
        .map((station) => {
          return station.selected;
        }).indexOf(true);

      const nextIndex = (currentIndex + 1) % state.length;
      // let newState = Object.assign({}, state);
      if (state.length === 0) {
        console.error('Cannot find next station of an empty array');
        return state;
      }
      let newState = [...state];
      console.log(newState);
      // this should use station SELECT and station DESELECT
      newState[currentIndex].selected = false;
      newState[nextIndex].selected = true;
      return newState;
    case 'STATION_SELECT':
      return state.map(t => station(t, action));
    case 'STATION_DESELECT':
      return state.map(t => station(t, action));
    */
    default:
      return state;
  }
};


export default stations;
