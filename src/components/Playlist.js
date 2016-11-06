import React, { Component } from 'react';
import './Playlist.css';

import PlayingAnimation from './PlayingAnimation';

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
    );
  }
}
Radio.propTypes = {
  selected: React.PropTypes.bool,
  id: React.PropTypes.number,
  index: React.PropTypes.number,
  // TODO: use {children} instead of {this.props.children} ?
  // should be node or element, or instanceOf, oneOf, check the doc
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  children: React.PropTypes.string,
  description: React.PropTypes.string,
  onClick: React.PropTypes.func,
};


const Playlist = ({ stations, player, onStationSelect })  => (
  <div>
    <table className="playlist stations">
      <tbody>
        { /*console.log('Playlist stations', stations)*/ }
        { stations.map(station =>
          <Radio index={1} selected={(station.id === player.currentStationId)}
            id={station.id}
            key={station.id}
            onClick={() => onStationSelect(station)}
            description={station.description}>
            {station.title}
          </Radio>
        )}
      </tbody>
    </table>
  </div>
);

Playlist.propTypes = {
  stations: React.PropTypes.array, // TODO: should be PropTypes.arrayOf(PropTypes.shape({
  player: React.PropTypes.object,
  onStationSelect: React.PropTypes.func // TODO
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
