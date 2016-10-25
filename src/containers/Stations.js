import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { playerSelectStation } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps: state', state);
  return {
    stations: state.stations,
    player: {
      currentStationId: state.player.currentStationId
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStationSelect: (id) => {
      dispatch(playerSelectStation(id));
    }
  };
};

const Stations = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist);

export default Stations;
