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
  }

  submitForm(e) {
    e.preventDefault();
    this.props.fetchSearch(this.searchText.value);
  }

  render() {
    console.log('this.props:', this.props);
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" ref={(input) => { this.searchText = input; }} />
        <button>Search</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  fetchSearch: React.PropTypes.func,
};
