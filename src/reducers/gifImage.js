export default function gifImage(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case 'CURRENT_GIF_FULFILLED': {
      console.log('payload:', payload);
      return payload;
    }
    default: return state;
  }
}
