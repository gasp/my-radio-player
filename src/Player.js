import React, { Component } from 'react';
import './Player.css';

// TODO: source is passed as props
// it should be great to find a way to do a mix cross-chaining files while loading

class Player extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      volume: props.volume,
      src: null
    };
    this.volume = this.volume.bind(this);
  }
  volume(ev) {
    this.setState({
      volume: 10
    });
    console.log("volume", ev.target.value);
    ev.stopPropagation();
    ev.preventDefault();
  }


  render() {
    // https://github.com/davidchin/react-input-range would be a good solution
    return (
      <div className="player">
        <div className="timeline"><progress value="22" max="100" /></div>
        <div className="volume">
          <input type="range" min="0" max="100" onChange={this.volume} />
        </div>
        <div className="display"></div>
        <audio controls="controls">
          <source src={this.props.source} />
        </audio>
      </div>
    )
  }
}

Player.propTypes = {
  volume: React.PropTypes.number,
  source: React.PropTypes.string
};
Player.defaultProps = {
  volume: 50,
  source: ''
};

export default Player;
