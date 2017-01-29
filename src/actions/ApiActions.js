import axios from 'axios';

export function fetchSearch(pack) {
  console.log('pack:', pack);
  console.log('pack.resultsLimit:', pack.resultsLimit);
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get(`/api/searches?term=${pack.searchTerm}&limit=${pack.resultsLimit}`),
  };
}
