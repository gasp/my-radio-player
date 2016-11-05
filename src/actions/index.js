let nextStationId = 0;

// TODO: rename as stationAdd
export const addStation = (text) => ({
  type: 'STATION_ADD',
  id: nextStationId++,
  text
});

export const playerSelectStation = (station) => ({
  type: 'PLAYER_SELECT_STATION',
  station
});

export const playerPlay = () => ({
  type: 'PLAYER_PLAY'
});

export const playerPause = () => ({
  type: 'PLAYER_PAUSE'
});

export const playerBuffer = (isBuffering) => ({
  type: 'PLAYER_BUFFER',
  isBuffering
});

export const stationNext = () => ({
  type: 'STATION_NEXT'
});
