import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    console.log('Player props',props);
    this.state =  {
      volume: props.volume,
      buffer: 0,

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
  componentDidMount() {
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
    let $audio = document.querySelector('audio');

    $audio.addEventListener('canplay', () => {
      console.log('loaded');
    });
    $audio.onvolumechange = ()=>{
      console.log('volume has been changed');
    };
    $audio.addEventListener('loadstart', () => {
      this.setState({buffer: 10});
      console.log('loadstart');
    });
    $audio.addEventListener('loadedmetadata', () =>{
      console.log('loadedmetadata');
      this.setState({buffer: 20});
    });
    $audio.addEventListener('loadeddata', () =>{
      console.log('loadeddata');
      this.setState({buffer: 30});
    });
    $audio.addEventListener('loaded', () =>{
      console.log('loaded');
      this.setState({buffer: 50});
    });
    $audio.addEventListener('canplaythrough', () =>{
      console.log('canplaythrough');
      this.setState({buffer: 90});
      if (this.props.player.isPlaying) {
        $audio.play();
      }
    });


    $audio.addEventListener('progress', (e) =>{
      // some music is playing, the user has sound in his ears
      // if disconnected, may be because playing music in buffer
      console.log('progress', this.state.buffer, e);

      if(this.state.buffer < 99) this.setState({buffer: this.state.buffer + 1});
    });
    $audio.addEventListener('stalled', () =>{
      console.log('stalled');
      this.setState({buffer: 10});
    });
    $audio.addEventListener('suspend', () =>{
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
        <div className="buffer">
          <progress value={this.state.buffer} max="100" />
        </div>
        <div className="volume">
          <input type="range" min="0" max="100" onChange={this.volume}
            defaultValue="90"/>
        </div>
        <div className="display">{ this.props.current.title }</div>
        <audio controls="controls" src={this.props.current.source} type="audio/mp3}" />
      </div>
    )
  }
}

Player.propTypes = {
  player: React.PropTypes.object,
  current: React.PropTypes.object
};
Player.defaultProps = {
  current: {id:0, title:'default', soucce:''}
};

const mapStateToProps = state => ({
  player: state.player,
  current: state.player.current
})
export default connect(mapStateToProps, null)(Player);
