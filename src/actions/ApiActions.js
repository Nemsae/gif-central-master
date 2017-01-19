import axios from 'axios';

export function fetchSearch(searchTerm) {
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`),
  };
}
