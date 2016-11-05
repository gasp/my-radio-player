
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
