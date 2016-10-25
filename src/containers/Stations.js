import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { playerSelectStation } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps: state', state);
  return {
    stations: state.stations,
    player: {
      currentStationId: state.player.current.id
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStationSelect: (station) => {
      // console.log('mapDispatchToProps station:',station);
      dispatch(playerSelectStation(station));
    }
  };
};

const Stations = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist);

export default Stations;
