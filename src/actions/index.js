let nextStationId = 0;

// TODO: translate into () => ({ a,b,c }) function
export const addStation = (text) => {
  return {
    type: 'STATION_ADD',
    id: nextStationId++,
    text
  };
};
