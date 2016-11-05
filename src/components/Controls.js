import React, { Component } from 'react';
import './Controls.css';
import ButtonPlay from './ButtonPlay';


class Controls extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      isPlaying: props.isPlaying
    };
    this.playpause = this.playpause.bind(this);
  }
  playpause() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      this.props.onChangePlayStatus(true);
    } else {
      this.setState({
        isPlaying: false
      });
      this.props.onChangePlayStatus(false);
    }
  }
  render() {
    return (
      <div className="controls">
        <button type="button" className="controls-next" onClick={this.props.onClickNext}>next</button> |&nbsp;
        <ButtonPlay isPlaying={this.state.isPlaying} isLoading={false}
          onClick={this.playpause} />
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
