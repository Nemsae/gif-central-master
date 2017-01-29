export default function gifImage(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case 'CURRENT_GIF': {
      return payload;
    }
    default: return state;
  }
}
