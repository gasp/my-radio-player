import React, { Component } from 'react';

class MessageComponent extends Component {
  render() {
    return (
      <p>{this.props.message}</p>
    );
  }
}

export default MessageComponent;
