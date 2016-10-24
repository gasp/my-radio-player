const player = (state = {
    isPlaying: false,
    isBuffering: false,
    isLoading: false
  }, action) => {
  switch (action.type) {
    case 'PLAYER_PLAY':
      return {...state, isPlaying: true};
    case 'PLAYER_PAUSE':
      return {...state, isPlaying: false};
    default:
      return state;
  }
};

export default player;
