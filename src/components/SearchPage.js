import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { currentGif } from '../actions/gifActions';

@connect(state => ({
  searchResults: state.apiCalls,
}), dispatch => ({
  setGifImage(image) {
    dispatch(currentGif(image));
  },
}))

export default class SearchPage extends Component {
  constructor() {
    super();
    this.gifImage = this.gifImage.bind(this);
  }

  gifImage(image) {
    this.props.setGifImage(image);
  }

  render() {
    const searchResults = this.props.searchResults;
    return (
      <div className="searchPageContainer">
        <h2>Search Gifs</h2>
        <SearchForm />
        <SearchResults searchResults={searchResults} gifImage={this.gifImage} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResults: React.PropTypes.object,
};
