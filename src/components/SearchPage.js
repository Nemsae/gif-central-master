import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

@connect(state => ({
  searchResults: state.apiCalls,
}))

export default class SearchPage extends Component {
  render() {
    const searchResults = this.props.searchResults;
    return (
      <div className="searchPageContainer">
        <h2>Search Gifs</h2>
        <SearchForm />
        <SearchResults searchResults={searchResults} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResults: React.PropTypes.object,
};
