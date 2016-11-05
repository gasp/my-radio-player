
// this special reducer applies on both stations and player

const next = (state = {}, action) => {
  switch (action.type) {
    case 'STATION_NEXT': {
      console.log(state);
      if (typeof state.player.current === 'undefined') {
        // return first station
        return {...state, player: {current: state.stations[0]}};
      }
      const currentIndex = state.stations
        .map((station) => station.id).indexOf(state.player.current.id);
      const nextIndex = (currentIndex + 1) % state.stations.length;
      if (state.stations.length === 0) {
        console.error('Cannot find next station of an empty array');
        return state;
      }
      return {...state, player: {...state.player, current: state.stations[nextIndex]}};
    }
    default:
      return state;
  }
};


export default next;
