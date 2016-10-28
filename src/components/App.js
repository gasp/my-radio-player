import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


import Settings from './Settings';
import Player from './Player';
import Stations from '../containers/Stations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" id="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Settings />
        <Player />
        <Stations />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stations: state.stations
})

const mapDispatchToProps = dispatch => ({
    // actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
