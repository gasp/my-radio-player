import React, { Component } from 'react';
import './Playlist.css';

import PlayingAnimation from './PlayingAnimation'

class Station extends Component {
  render() {
    var className = "station"
    var play = "play"
    if (this.props.selected) {
      className += " selected";
      play = <PlayingAnimation />;
    }
    if (this.props.playing) {
      className += " playing";
      play = <PlayingAnimation />;
    }

    return (
      <tr className={className}>
        <td className="num">{this.props.index + 1}</td>
        <td className="control" onClick={this.props.play}>{play}</td>
        <td className="title">{this.props.children}</td>
        <td className="description">{this.props.description}</td>
      </tr>
    )
  }
}

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      stations: props.stations,
      selectedStation: 0
    };
    this.next = this.next.bind(this);
    console.log('playlist:',this.props.stations.length, 'stations');
  }
  next(evt) {
    this.setState({
      selectedStation: (this.state.selectedStation + 1) %
        this.props.stations.length
    });
  }
  render() {
    var stations = [];
    for (var ii = 0; ii < this.props.stations.length; ii++) {
      var isSelected = (ii === this.state.selectedStation);
      stations.push(
        <Station index={ii} selected={isSelected} key={this.props.stations[ii].id}
          description={this.props.stations[ii].description}>
          {this.props.stations[ii].title}
        </Station>
      )
    }
    return (
      <div>
        <table className="stations">
          <tbody>
            {stations}
          </tbody>
        </table>
        <p> this should be put into Controls </p>
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}
Playlist.propTypes = { stations: React.PropTypes.array};
Playlist.defaultProps = { stations: [
  { id: 99999999, title: 'No radio', description: "You should have some radios there" }
]};

export default Playlist;
