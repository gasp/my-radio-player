import React, { Component } from 'react';
import './Playlist.css';

import PlayingAnimation from './PlayingAnimation'

// TODO: can this be stateless ?
// generate it this way ? https://egghead.io/lessons/react-dynamically-generated-components
// more stuff can be seen there for jsx ninja tuning https://egghead.io/lessons/jsx-deep-dive



class Radio extends Component {

  render() {
    let className = "station";
    let play = "play";
    if (this.props.selected) {
      className += " selected";
      play = <PlayingAnimation />;
    }

    // TODO: onclick on full line
    // blocking: target is the td instead of the tr
    return (
      <tr className={className} >
        <td className="num">{this.props.index + 1}</td>
        <td className="control" id={this.props.id} onClick={this.props.onClick}>{play}</td>
        <td className="title">{this.props.children}</td>
        <td className="description">{this.props.description}</td>
      </tr>
    )
  }
}
Radio.propTypes = {
  selected: React.PropTypes.bool,
  description: React.PropTypes.string,
  onClick: React.PropTypes.func,
}


const Playlist = ({ stations, onClick })  => (
  <div>
    <table className="stations">
      <tbody>
        {stations.map(station =>
          <Radio index={1} selected={true}
            id={station.id}
            key={station.id}
            description={station.description}>
            {station.title}
          </Radio>
        )}
      </tbody>
    </table>
  </div>
)

Playlist.propTypes = {
  stations: React.PropTypes.array, // TODO: should be PropTypes.arrayOf(PropTypes.shape({
  //onSelectStation: React.PropTypes.func // todo
};
Playlist.defaultProps = {
  stations: [
    {
      index: 0,
      id: 99999999, title: 'No radio',
      description: "You should have some radios there",
      source: "http://perdu.com"
    }
  ],
  station: function () { return false; }
};

export default Playlist;
