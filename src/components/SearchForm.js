import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/ApiActions';

@connect(null, dispatch => ({
  fetchSearch(searchTerm) {
    dispatch(fetchSearch(searchTerm));
  },
}))

export default class SearchForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.resultLimit = this.resultLimit.bind(this);

    this.state = {
      resultLimit: '25',
    };
  }

  resultLimit(e) {
    this.setState({
      resultLimit: e.target.innerHTML,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const searchPackage = {
      searchTerm: this.searchText.value,
      resultsLimit: this.state.resultLimit,
    };
    this.props.fetchSearch(searchPackage);
  }

  render() {
    const limit = this.state.resultLimit;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" ref={(input) => { this.searchText = input; }} />
          <button>Search</button>
        </form>
        <div id="resultsLimitContainer">
          <button className={`${limit === '25' ? 'selected' : ''}`} onClick={this.resultLimit}>25</button>
          <button className={`${limit === '50' ? 'selected' : ''}`} onClick={this.resultLimit}>50</button>
          <button className={`${limit === '75' ? 'selected' : ''}`} onClick={this.resultLimit}>75</button>
          <button className={`${limit === '100' ? 'selected' : ''}`} onClick={this.resultLimit}>100</button>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  fetchSearch: React.PropTypes.func,
};
