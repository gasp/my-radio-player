import React from 'react';
import './ButtonPlay.css';

const ButtonPlay = ({ onClick, isLoading, isPlaying }) => {
  const className = "play"+ ((isPlaying)? " active":"");
  return (
    <button title="Play video" className={className}
      data-loading={isLoading} onClick={onClick} />
  );
};

ButtonPlay.propTypes = {
  onClick: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
  isPlaying: React.PropTypes.bool
};
export default ButtonPlay;
