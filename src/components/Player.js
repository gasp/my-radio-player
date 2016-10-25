import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    console.log('Player props',props);
    this.state =  {
      volume: props.volume
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

    $audio.addEventListener('canplay', function () {
      console.log('loaded');
      // this.play();
    });


    $audio.onvolumechange = ()=>{
      console.log('volume has been changed');
    };
    $audio.addEventListener('loadstart', ()=>{
      console.log('loadstart');
    });
    $audio.addEventListener('canplaythrough', ()=>{
      console.log('canplaythrough');
      $audio.play();
    });
    $audio.addEventListener('loadeddata', ()=>{
      console.log('loadeddata');
    });
    $audio.addEventListener('loadedmetadata', ()=>{
      console.log('loadedmetadata');
    });
    $audio.addEventListener('loadstart', ()=>{
      console.log('loadstart');
    });
    $audio.addEventListener('progress', ()=>{
      // some music is playing, the user has sound in his ears
      // if disconnected, may be because playing music in buffer
      console.log('progress');
    });
    $audio.addEventListener('stalled', ()=>{
      console.log('stalled');
    });
    $audio.addEventListener('suspend', ()=>{
      console.log('suspend');
    });
    /*
    */
  }
  render() {
    // https://github.com/davidchin/react-input-range would be a good solution
    // https://www.npmjs.com/package/react-sound
    // https://scotch.io/tutorials/build-a-bookshop-with-react-redux-i-react-redux-flow
    //
    return (
      <div className="player">
        <div className="timeline buffer">
          <progress value="22" max="100" />
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
