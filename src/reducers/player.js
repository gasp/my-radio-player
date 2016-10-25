const player = (state = {
    isPlaying: false,
    isBuffering: false,
    isLoading: false,
    currentStationId: ''
  }, action) => {
  switch (action.type) {
    case 'PLAYER_PLAY':
      return {...state, isPlaying: true};
    case 'PLAYER_PAUSE':
      return {...state, isPlaying: false};
    case 'PLAYER_SELECT_STATION': // rename this
      return {...state, currentStationId: action.id};
    default:
      return state;
  }
};

export default player;
