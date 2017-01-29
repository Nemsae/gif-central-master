import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  largeGif: this.state.gifImage,
}))

export default class PlaygroundPage extends Component {
  render() {
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}
