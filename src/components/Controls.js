import React, { Component } from 'react';
import './Controls.css';
import ButtonPlay from './ButtonPlay';


class Controls extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      isPlaying: props.isPlaying
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.pause = this.next.bind(this);
    this.pause = this.next.bind(this);
  }
  play() {
    this.setState({
      isPlaying: true
    });
    this.props.onChangePlayStatus(true);
  }
  pause() {
    this.setState({
      isPlaying: false
    });
    this.props.onChangePlayStatus(false);
  }

  next() {
    this.setState({});
  }
  render() {
    return (
      <div className="controls">
        <ButtonPlay />
        <button type="button" className="controls-prev" onClick={this.props.onClickNext}>next</button> |&nbsp;
        <button type="button" className="controls-prev" disabled={!this.state.isPlaying} onClick={this.pause}>pause</button>
        <button type="button" className="controls-prev" disabled={this.state.isPlaying} onClick={this.play}>play</button>
      </div>
    );
  }
}

Controls.propTypes = {
  onChangePlayStatus: React.PropTypes.func,
  onClickNext: React.PropTypes.func,
  isPlaying: React.PropTypes.bool
};
Controls.defaultProps = {
  isPlaying: false
};

export default Controls;
