import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import './Player.css';
import { playerPlay, playerPause } from '../actions';

class Player extends Component {
  constructor(props) {
    super(props);
    // console.log('Player props',props);
    this.state =  {
      volume: props.volume, // TODO does this needs to be in props ? can't we use state ?
      buffer: 0,
    };
    this.volume = this.volume.bind(this);
    this.play = this.play.bind(this);
  }
  volume(ev) {
    this.setState({
      volume: ev.target.value
    });
    console.log("volume", ev.target.value);
    this.$audio.volume = ev.target.value / 100;

    ev.stopPropagation();
    ev.preventDefault();
  }
  play(isPlaying) {
    if (isPlaying) this.props.dispatch(playerPlay());
    else this.props.dispatch(playerPause());
  }
  componentDidMount() {
    // Media Events
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
    this.$audio = document.querySelector('audio');

    // an alternative would be using the webaudioapi
    // http://codetheory.in/controlling-the-volume-of-an-audio-file-in-javascript/

    this.$audio.onvolumechange = (ev) => {
      console.log('volume has been changed to ', this.$audio.volume);
    };

    this.$audio.addEventListener('canplay', () => {
      console.log('loaded');
    });

    this.$audio.addEventListener('loadstart', () => {
      this.setState({buffer: 10});
      console.log('loadstart');
    });
    this.$audio.addEventListener('loadedmetadata', () => {
      console.log('loadedmetadata');
      this.setState({buffer: 20});
    });
    this.$audio.addEventListener('loadeddata', () => {
      console.log('loadeddata');
      this.setState({buffer: 30});
    });
    this.$audio.addEventListener('loaded', () => {
      console.log('loaded');
      this.setState({buffer: 50});
    });
    this.$audio.addEventListener('canplaythrough', () => {
      console.log('canplaythrough');
      this.setState({buffer: 90});
      console.warn('this.props.player.isPlaying',this.props.player.isPlaying);
      if (this.props.player.isPlaying) {
        this.$audio.play();
      }
    });


    this.$audio.addEventListener('progress', () => {
      // some music is playing, the user has sound in his ears
      // if disconnected, may be because playing music in buffer
      // console.log('progress', this.state.buffer, e);

      if(this.state.buffer < 99) this.setState({buffer: this.state.buffer + 1});
    });
    this.$audio.addEventListener('stalled', () => {
      console.log('stalled');
      this.setState({buffer: 10});
    });
    this.$audio.addEventListener('suspend', () => {
      console.log('suspend');
      this.setState({buffer: 5});
    });

  }
  render() {
    // https://github.com/davidchin/react-input-range would be a good solution
    // https://www.npmjs.com/package/react-sound
    // https://scotch.io/tutorials/build-a-bookshop-with-react-redux-i-react-redux-flow
    //
    return (
      <div className="player">
        <Controls onChangePlayStatus={this.play}/>
        <div className="buffer">
          <progress value={this.state.buffer} max="100" />
        </div>
        <div className="volume">
          <input type="range" min="0" max="100" onChange={this.volume}
            defaultValue="90"/>
        </div>
        <div className="display">{ this.props.current.title }</div>
        <audio controls="controls" src={this.props.current.source}
          type="audio/mp3" autoPlay={this.props.player.isPlaying} />
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object,
  current: React.PropTypes.object,
  dispatch: React.PropTypes.func
};
Player.defaultProps = {
  current: {id:0, title:'default', soucce:''}
};

const mapStateToProps = state => ({
  player: state.player,
  current: state.player.current
});

export default connect(mapStateToProps, null)(Player);
