import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  gifImage: state.gifImage,
}))

export default class PlaygroundPage extends Component {
  render() {
    return (
      <div id="gifBackgroundContainer">
        <div className="gifBackgroundCard">
          <img src={this.props.gifImage} alt="current gif background" />
        </div>
      </div>
    );
  }
}

PlaygroundPage.propTypes = {
  gifImage: React.PropTypes.string,
};
