import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Settings from './Settings';
import Player from './Player';
import Stations from '../containers/Stations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
        <Player />
        <Stations />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.stations
});

const mapDispatchToProps = dispatch => ({
    // actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
