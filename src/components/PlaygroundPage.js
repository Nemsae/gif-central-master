import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  gifImage: state.gifImage,
}))

export default class PlaygroundPage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.gifImage} alt="current gif background" />
      </div>
    );
  }
}

PlaygroundPage.propTypes = {
  gifImage: React.PropTypes.string,
};
