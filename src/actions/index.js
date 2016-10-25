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
