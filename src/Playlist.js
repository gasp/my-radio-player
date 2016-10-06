import React, { Component } from 'react';
import './Playlist.css';

import PlayingAnimation from './PlayingAnimation'

class Radio extends Component {

  render() {
    let className = "station"
    let play = "play"
    if (this.props.selected) {
      className += " selected";
      play = <PlayingAnimation />;
    }

    // TODO: onclick on full line
    // blocking: target is the td instead of the tr
    return (
      <tr className={className} >
        <td className="num">{this.props.index + 1}</td>
        <td className="control" onClick={this.props.select} id={this.props.id}>{play}</td>
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
      selectedId: props.stations[0].id,
    };
    this.next = this.next.bind(this);
    this.select = this.select.bind(this);
    console.log('playlist:',this.props.stations.length, 'stations');
  }
  next() {
    let current = this.props.stations.map(el => el.id).indexOf(this.state.selectedId);
    let next = (current + 1) % this.props.stations.length;
    this.setState({
      selectedId: this.props.stations[next].id
    });
    this.props.station(this.props.stations[next]);
  }
  select(ev) {
    let id = parseInt(ev.target.id, 10);
    let current = this.props.stations.map(el => el.id).indexOf(id);
    this.setState({
      selectedId: id
    });
    this.props.station(this.props.stations[current]);
  }
  render() {
    let stations = [];
    for (var ii = 0; ii < this.props.stations.length; ii++) {
      var isSelected = (this.props.stations[ii].id === this.state.selectedId);
      stations.push(
        <Radio index={ii} selected={isSelected}
          id={this.props.stations[ii].id}
          key={this.props.stations[ii].id}
          description={this.props.stations[ii].description}
          select={this.select}>
          {this.props.stations[ii].title}
        </Radio>
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
Playlist.propTypes = {
  stations: React.PropTypes.array,
  station: React.PropTypes.func
};
Playlist.defaultProps = {
  stations: [
    {
      id: 99999999, title: 'No radio',
      description: "You should have some radios there",
      source: "http://perdu.com"
    }
  ],
  station: function () { return false; }
};

export default Playlist;
