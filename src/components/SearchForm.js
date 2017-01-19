import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/ApiActions';

@connect(null, dispatch => ({
  fetchSearch(search) {
    dispatch(fetchSearch(search));
  },
}))

export default class SearchForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    console.log('hi');
  }

  renderr() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" ref={(input) => { this.searchText = input; }} />
        <button>Search</button>
      </form>
    );
  }
}
