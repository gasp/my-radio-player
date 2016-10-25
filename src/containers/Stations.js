import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { stationSelect } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps: state', state);
  return {
    stations: state.stations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStationSelect: (id) => {
      dispatch(stationSelect(id));
    }
  };
};

const Stations = connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist);

export default Stations;
