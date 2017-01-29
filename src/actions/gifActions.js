import axios from 'axios';

export function currentGif(gif) {
  return {
    type: 'CURRENT_GIF',
    payload: axios.update(`/background/gif?image=${gif}`),
  };
}
