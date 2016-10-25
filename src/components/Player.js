import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      volume: props.volume,
      source: null // this may be translated into prop
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
    console.log('mounted');
    let $audio = document.querySelector('audio');

    $audio.addEventListener('canplay', function () {
      console.log('loaded');
      // this.play();
    });

    /*
    $audio.addEventListener('loadstart', ()=>{
      console.log('loadstart');
    });
    $audio.addEventListener('canplaythrough', ()=>{
      console.log('canplaythrough');
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
    */
  }
  render() {
    // https://github.com/davidchin/react-input-range would be a good solution
    return (
      <div className="player">
        <div className="timeline buffer">
          <progress value="22" max="100" />
        </div>
        <div className="volume">
          <input type="range" min="0" max="100" onChange={this.volume}
            defaultValue="90"/>
        </div>
        <div className="display">{this.props.station.title}</div>
        <audio controls="controls" src={this.props.station.source} type="audio/mp3" />
      </div>
    )
  }
}

Player.propTypes = {
  volume: React.PropTypes.number,
  station: React.PropTypes.object
};
Player.defaultProps = {
  volume: 50,
  station: {id: 42, source: ''}
};

export default Player;
