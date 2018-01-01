const player = (state = {
  isPlaying: false,
  isBuffering: false,
  isLoading: false,
  current: {id: false, title: '[none]'}
}, action) => {
  switch (action.type) {
    case 'PLAYER_PLAY':
      return {...state, isPlaying: true};
    case 'PLAYER_PAUSE':
      return {...state, isPlaying: false};
    case 'PLAYER_BUFFER':
      return {...state, isBuffering: action.isBuffering};
    case 'PLAYER_SELECT_STATION':
      return {...state, current: action.station};
    default:
      return state;
  }
};

export default player;
