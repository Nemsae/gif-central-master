import axios from 'axios';

export function fetchSearch(searchTerm) {
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get('api/searches', searchTerm),
  };
}
