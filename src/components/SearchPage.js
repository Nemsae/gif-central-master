import React from 'react';
import SearchForm from './SearchForm';
// import SearchResults from 'SearchResults';

export default function SearchPage() {
  return (
    <div className="searchPageContainer">
      <h2>Search Gifs</h2>
      <SearchForm />
      {/* <SearchResults /> */}
    </div>
  );
}
