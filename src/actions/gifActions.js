import axios from 'axios';

export function currentGif(gif) {
  return {
    type: 'CURRENT_GIF',
    payload: axios.put(`/api/background`, gif),
  };
}
