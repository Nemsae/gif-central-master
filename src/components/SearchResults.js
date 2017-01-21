import React from 'react';

export default function SearchResults(props) {
  const searchResults = props.searchResults || [];
  console.log('searchResults:', searchResults);
  return (
    <div id="searchTable">
      {
        searchResults.length && searchResults.map((gif, i) => {
          return (
            <div className="searchCard" key={i}>
              <div className="searchImageContainer">
                <img src={gif.images.downsized_medium.url} alt="gif" />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

SearchResults.propTypes = {
  searchResults: React.PropTypes.array,
};
