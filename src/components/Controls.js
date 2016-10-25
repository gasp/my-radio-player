import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      isPlaying: props.isPlaying
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.setState({
      isPlaying: true
    });
  }
  pause() {
    this.setState({
      isPlaying: false
    });
  }
  select(id) {
    this.setState({
      current: id
    });
  }
  next() {
    this.setState({})
  }
  render() {
    return (
      <div className="controls">
        <button type="button" className="controls-prev" onClick={this.prev}>previous</button>
        <button type="button" className="controls-prev" onClick={this.prev}>next</button> |&nbsp;
        <button type="button" className="controls-prev" disabled={!this.state.isPlaying} onClick={this.pause}>pause</button>
        <button type="button" className="controls-prev" disabled={this.state.isPlaying} onClick={this.play}>play</button>
      </div>
    )
  }
}

Controls.propTypes = { isPlaying: React.PropTypes.bool};
Controls.defaultProps = { isPlaying: false};

export default Controls;
