import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import './Player.css';
import { playerPlay, playerPause, playerBuffer, stationNext } from '../actions';

class Player extends Component {
  constructor(props) {
    super(props);
    // console.log('Player props',props);
    this.state =  {
      // TODO does this needs to be in props ? can't we use state ?
      // initial volume may be saved in localStorage
      volume: props.volume,
      buffer: 0,
    };
    this.volume = this.volume.bind(this);
    this.play = this.play.bind(this);
    this.next = this.next.bind(this);
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
    if (isPlaying) {
      this.props.dispatch(playerPlay());
      this.$audio.play();
    }
    else {
      this.props.dispatch(playerPause());
      this.$audio.pause();
    }
  }
  // prev / next
  next() {
    this.props.dispatch(stationNext());
  }
  componentDidMount() {
    // Media Events
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
    this.$audio = document.querySelector('audio');

    // an alternative would be using the webaudioapi
    // http://codetheory.in/controlling-the-volume-of-an-audio-file-in-javascript/

    this.setState({volume: this.$audio.volume * 100});
    console.log('setting volume', this.$audio.volume * 100);

    this.$audio.addEventListener('loadstart', () => {
      this.props.dispatch(playerBuffer(true));
      this.setState({buffer: 10});
      console.log('audio: loadstart');
    });
    this.$audio.addEventListener('loadedmetadata', () => {
      console.log('audio: loadedmetadata');
      this.setState({buffer: 20});
    });
    this.$audio.addEventListener('loadeddata', () => {
      console.log('audio: loadeddata');
      this.setState({buffer: 30});
    });
    this.$audio.addEventListener('loaded', () => {
      console.log('audio: loaded');
      this.setState({buffer: 50});
    });
    this.$audio.addEventListener('canplaythrough', () => {
      console.log('audio: canplaythrough');
      this.setState({buffer: 90});
      this.props.dispatch(playerBuffer(false));
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
    // http://codepen.io/cliffpyles/pen/xbsiC a great circular progress bar
    return (
      <div className="player">
        <h1 className="display">{ this.props.current.title }</h1>
        <Controls onChangePlayStatus={this.play} onClickNext={this.next} />
        <div className="buffer">
          <progress value={this.state.buffer} max="100" />
        </div>
        <div className="volume">
          <input type="range" min="0" max="100" onChange={this.volume}
            defaultValue="90"/>
        </div>
        <audio src={this.props.current.source}
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
